<template>
  <div class="page">
    <div class="quiz">
      <h1>Quiz</h1>
      <LoadingSvg v-if="questions.length<1"/>
      <div class="simple-page">
        <div class="questions">
          <Question 
            v-for="q in questions"
            :key="q.id"
            :q="q"
            @answer-update="updateAnswers(q.id, $event)" />
        </div>
      </div>
      <div class="submit-section">
        <button 
          :disabled="hasUnanswered"
          class="button is-large"
          @click="checkAnswers">
          Check answers!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question';
import LoadingSvg from './LoadingSvg';
import { getQuestions, submitAnswers } from './utils/dbutils';
import Container from 'vue-smooth-dnd/src/Container';
export default {
  name: 'Quiz',
  components: { Question, Container, LoadingSvg },
  data() {
    return {
      questions: [],
      answers: [],
      hasUnanswered: true
    };
  },
  mounted() { getQuestions('Quiz-1').then(qs => { this.questions = qs }); },
  methods: {
    updateAnswers(i, answer) {
      this.answers[i] = answer;
      const hasMissingAnswers = Object.keys(this.answers).length !== this.questions.length;
      const hasEmptyAnswers = this.answers.some(a => (a[0] === '') || (a[1] === ''));
      this.hasUnanswered = (hasEmptyAnswers || hasMissingAnswers);
    },
    checkAnswers() {
      console.log(this.answers);
      if (this.questions === true) {
        submitAnswers();
      }
    }
  }
};

</script>
