
<template>
  <sound-player ref="player" :mp3="mp3" @start="beginTracking" @end="endTracking">
    <span class="wt-complete" v-html="completedText"></span>
    <span class="wt-current" v-html="currentWord"></span>
    <span class="wt-rest" v-html="remainingText"></span>
  </sound-player>
          
</template>

<script>
import SoundPlayer from './SoundPlayer';
function applyBr(m) { return m.value + (m.break ? '<br>' : ''); }

export default {
  name: 'EnjaSentence',
  components: { SoundPlayer },
  props: { rawMarks: { type: String, default: '' }, mp3: { type: String, default: '' }, },
  data() {
    return {
      marks: [],
      completed: [],
      remaining: [],
      current: { value: '', time: 0 },
      timeout: null,
    }
  },
  computed: {
    sentence() { return this.marks.map(applyBr).join(' '); },
    completedText() { return this.completed.map(applyBr).join(' '); },
    remainingText() { return this.remaining.map(applyBr).join(' '); },
    currentWord() { return ' ' + this.current.value + (this.current.break ? '<br>' : ' '); }
  },
  beforeDestroy: function () {
    this.$store.commit('UNREGISTER_SOUND_PLAYER', { player: this });
  },
  mounted() {
    this.$store.commit('REGISTER_SOUND_PLAYER', { player: this });
    if (this.rawMarks.length < 2) {
      console.error('no mark data!');
      return;
    }
    /** 
     * Speech-marks are similar to json, but multiple objects need no wrapping array and no commas, 
     * Also, since we use the url-loader the data will be wrapped in data-uri, and base64.
     * Here we unwrap data-uri and base64, split at linebreaks and remove empty lines (last line usually). 
     * Then we parse back each object to json and the result is an array of objects.
     */
    let arr = atob(this.rawMarks.replace('data:;base64,', '')).split('\n').filter(s => s.length > 0);
    this.marks = arr.map(JSON.parse);
    this.remaining = [...this.marks];
  },
  methods: {
    beginTracking() {
      this.$store.dispatch('STOP_SOUND_PLAYERS');
      this.trackNext();
    },
    trackNext() {
      clearTimeout(this.timeout);
      this.completed.push(this.current);
      this.current = this.remaining.shift();
      if (this.remaining.length < 1) {
        setTimeout(this.resetTracking, (this.current.end + 1000));
      } else {
        const delay = this.remaining[0].time - this.current.time;
        this.timeout = setTimeout(this.trackNext, delay);
      }
    },
    endTracking() {
      // setTimeout(this.resetTracking, 1000);
    },
    resetTracking() {
      this.$refs['player'].stop();
      clearTimeout(this.timeout);
      this.timeout = null;
      this.completed = [];
      this.current = { value: '', time: 0 };
      this.remaining = [...this.marks];
    }
  }
};
</script>

