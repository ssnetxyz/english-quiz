
<template>
  <div class="container">
    <table class="table-enja">
      <tr>
        <td class="icon">
          <flag-gb/>
        </td>
        <td>
          <p>
            <span class="wt-complete" v-html="completedText"></span>
            <span class="wt-current" v-html="currentWord"></span>
            <span class="wt-rest" v-html="remainingText"></span>
          </p>
        </td>
        <td class="icon">
          <sound-player :mp3="mp3" @start="beginTracking" />
        </td>
      </tr>
      <tr>
        <td class="icon">
          <flag-jp/>
        </td>
        <td :class="{'reveal-me': !isRevealed}" colspan="2" @click="isRevealed = !isRevealed">
          <div v-if="isRevealed">
            <slot name="ja" />
          </div>
          <div v-else>
            クリックすると日本語を表示されます
          </div>
        </td>
      </tr>

    </table>
  </div>
</template>


<script>
import SoundPlayer from './SoundPlayer';
import FlagUK from './SvgFlagUK';
import FlagJp from './SvgFlagJp';
export default {
  name: 'EnJaTable',
  components: { SoundPlayer, FlagUK, FlagJp },
  props: {
    marks: { type: Array, default: () => [] },
    mp3: { type: String, default: '' },    
  },
  data(){
    return {
      isRevealed: false,
      completed: [],
      remaining: [],
      current: { value:'', time:0 },
      timestamp: 0,
      timer:null
    }
  },
  computed:{
    sentence(){ return this.marks.map(m => m.value + (m.break?'<br>':'') ).join(' '); },
    completedText(){ return this.completed.map(m => m.value + (m.break?'<br>':'') ).join(' '); },    
    remainingText(){ return this.remaining.map(m => m.value + (m.break?'<br>':'') ).join(' '); },
    currentWord(){ return ' ' + this.current.value + (this.current.break?'<br>':' '); }
  },
  mounted(){
    this.remaining = [...this.marks];    
  },
  methods: {
    beginTracking() {
      this.current = { value: '', time: 0 };
      this.completed = [];
      this.remaining = [...this.marks];
      this.trackNext();
    },
    trackNext(){
      this.completed.push(this.current);
      this.current = this.remaining.shift();
     
      // this.remainingText = this.remaining.map(m => m.value + (m.break?'<br>':'') ).join(' '); 
      if( this.remaining.length > 0 ){
        setTimeout(this.trackNext, this.remaining[0].time - this.current.time);
      }
    }

  }
};
</script>

