<template>
  <div class="signup-form">
    <h3>
      <EnjaSentence 
        :mp3="areYouInterestedMp3" 
        :raw-marks="areYouInterestedMarks" 
        :key="'s1'">
      </EnjaSentence>
    </h3>
    <p class="dimmed">英語クラスに参加しますか？</p>
    <iframe src="https://formview.io/#/tgwvzaegjgoylnt/contactform?header=0" />
    
    
  </div>
</template>

<script>
import { Form } from 'vue-formio';
import EnjaSentence from '@/components/EnjaSentence';
import areYouInterestedMp3 from '@/sounds/are-you-interested.mp3';
import areYouInterestedMarks from 'url-loader!@/sounds/are-you-interested.marks';
export default {
  name: 'SignupForm',
  components: { EnjaSentence, formio: Form },
  data() {
    return {
      areYouInterestedMp3, areYouInterestedMarks,
      formUrl: 'https://tgwvzaegjgoylnt.form.io/contactform'
    }
  },
  methods: {
    onSubmitMethod: function (submission) {
      console.log(submission);
    }
  }
};
</script>
<style scoped>
  iframe{
    margin-top: 5vh;
    border: 0;
    height: 18em;
    width: 100%;
  }
</style>
