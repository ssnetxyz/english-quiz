<template>
  <div>
    <h1><span class="fun">EIGO</span> IS FUN!</h1>
    <h3><EnjaSentence :mp3="welcomeMp3" :raw-marks="welcomeMarks" :key="'s1'"></EnjaSentence></h3>
    <p><EnjaSentence :mp3="websiteForMp3" :raw-marks="websiteForMarks" :key="'s2'"></EnjaSentence></p>
    <p class="dimmed">ようこそ！<br>これはマーカスの英語授業のホームページです。</p>
    <p><EnjaSentence :mp3="niceToMeetYouMp3" :raw-marks="niceToMeetYouMarks" :key="'s3'"></EnjaSentence></p>
    <p class="dimmed">初めまして！<br></p>
    <div class="future-video">      
      <h4>Video coming soon</h4>
      <div class="video-icon">
        <svg 
          width="200"
          aria-hidden="true" 
          data-prefix="fab" 
          data-icon="youtube" 
          class="svg-inline--fa fa-youtube fa-w-18" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 576 512"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></div>
      <p>(Marcus introducing himself.)</p>
      <p>The website is a work in progress. My apologies!</p>
      <div class="message-author">Marcus<br><span>2018-11-03</span></div>
    </div>
  </div>
</template>


<script>
/**
 * 
    <EnJaTable :mp3="sound1" :marks="marks1">
      <p slot="ja">あなたは3年生ですか？<br>あなたは高校試験のために勉強していますか？</p>
    </EnJaTable>
    <EnJaTable :mp3="sound1" :marks="marks1">
      <p slot="ja">あなたは3年生ですか？<br>あなたは高校試験のために勉強していますか？</p>
    </EnJaTable>
 */
import EnJaTable from './EnJaTable';
import EnjaSentence from './EnjaSentence';
import welcomeMp3 from '@/sounds/welcome[uk-brian].mp3';
import welcomeMarks from 'url-loader!@/sounds/welcome[uk-brian].marks';
import websiteForMp3 from '@/sounds/this-is-the-website-for.mp3';
import websiteForMarks from 'url-loader!@/sounds/this-is-the-website-for.marks';
import niceToMeetYouMp3 from '@/sounds/nice-to-meet-you.mp3';
import niceToMeetYouMarks from 'url-loader!@/sounds/nice-to-meet-you.marks';
import sound1 from '@/sounds/are-you-a-third-year-student[uk-brian].mp3';
import marks1 from '@/sounds/are-you-a-third-year-student[uk-brian].json';

export default {
  name: 'HomeContent',
  components: { EnJaTable, EnjaSentence },
  data() {
    return {
      sound1, marks1,
      welcomeMp3, welcomeMarks,
      websiteForMp3, websiteForMarks,
      niceToMeetYouMp3, niceToMeetYouMarks
    };
  },
};
</script>
