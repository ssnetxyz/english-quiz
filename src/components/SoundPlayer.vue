<template>
  <div class="mp3player is-bordered" title="Play" @click="play">
    <slot></slot>
    <audio 
      ref="audio" 
      :loop="innerLoop" 
      :src="mp3" 
      preload="auto" 
      style="display:none;" />
  </div>
</template>

<script>
import SoundIcon from './SvgSound';
export const baseVolumeValue = 7.5;
export const prefixCls = 'vue-sound';

export const convertTimeHHMMSS = val => {
  let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
  return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss;
};

export default {
  name: 'SoundPlayer',
  components: { SoundIcon },
  props: {
    marks: {
      type: Array,
      default: () => []
    },
    mp3: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isMuted: false,
      loaded: false,
      innerLoop: undefined,
      audio: undefined,
      totalDuration: 0,
      volumeValue: baseVolumeValue
    };
  },
  computed: {
    duration: function () {
      return this.audioElement ? convertTimeHHMMSS(this.totalDuration) : '';
    },
    classes: function () {
      return prefixCls;
    }
  },

  beforeDestroy: function () {
    this.audioElement.removeEventListener('ended', this.onEnd);
    this.audioElement.removeEventListener('loadeddata', this.onAudioLoad);
  },
  mounted: function () {
    this.audioElement = this.$refs['audio'];
    this.innerLoop = this.loop;
    this.audioElement.addEventListener('ended', this.onEnd);
    this.audioElement.addEventListener('loadeddata', this.onAudioLoad);
  },
  methods: {
    updateVolume: function () {
      this.audioElement.volume = this.volumeValue / 100;
      this.isMuted = this.audioElement.muted = (this.volumeValue / 100 > 0);
    },
    play: function () {
      this.audioElement.currentTime = 0;
      this.audioElement.play();
      this.$emit('start');
    },
    stop: function () {
      const isPlaying =
        this.audioElement.currentTime > 0 &&
        !this.audioElement.paused &&
        !this.audioElement.ended;
      if (isPlaying) {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
      }
    },
    mute: function () {
      this.isMuted = !this.isMuted;
      this.audioElement.muted = this.isMuted;
      this.volumeValue = this.isMuted ? 0 : 75;
    },
    onAudioLoad: function () {
      if (this.audioElement.readyState >= 2) {
        this.loaded = true;
        this.totalDuration = parseInt(this.audioElement.duration);
      } else {
        throw new Error('Failed to load sound mp3');
      }
    },
    onEnd: function () { this.$emit('end'); },
  }
};
</script>