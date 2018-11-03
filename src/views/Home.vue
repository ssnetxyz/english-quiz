<template>
  <div class="page">
    <HomeContent class="home" />
    <div class="sidebar">
      <SvgBrian class="clickable" @click="clickBrian()"></SvgBrian>
      <p><EnjaSentence ref="brian" :mp3="myNameIsBrianMp3" :raw-marks="myNameIsBrianMarks"></EnjaSentence></p>
      <p><EnjaSentence :mp3="ifYouClickMp3" :raw-marks="ifYouClickMarks"></EnjaSentence></p>
      <p class="dimmed">こんにちは！ 私の名前はブライアンです。<br>文章をクリックすると、私はあなたにその文章を読みます。<br>（英語だけ）</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeContent from '@/components/HomeContent.vue'
import SvgBrian from '@/components/SvgBrian.vue'
import EnjaSentence from '@/components/EnjaSentence';
import myNameIsBrianMp3 from '@/sounds/mynameisbrian.mp3';
import myNameIsBrianMarks from 'url-loader!@/sounds/mynameisbrian.marks';
import ifYouClickMp3 from '@/sounds/ifyouclick.mp3';
import ifYouClickMarks from 'url-loader!@/sounds/ifyouclick.marks';

export default {
  name: 'Home',
  components: {
    HomeContent, EnjaSentence, SvgBrian,
  },
  data: () => ({

    myNameIsBrianMp3,
    myNameIsBrianMarks,
    ifYouClickMp3,
    ifYouClickMarks,
  }),
  mounted(){
    
  }
}
</script>