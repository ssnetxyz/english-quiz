import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Alphabet from './views/Alphabet.vue'
import Bingo from './views/Bingo.vue'
import Quiz from './views/Quiz.vue'
import Tools from './views/Tools.vue'
import Quizzes from './views/Quizzes.vue'
import Access from './views/Access.vue'
import Join from './views/Join.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/quizzes/:quiz', name: 'quiz', component: Quiz },
    { path: '/quizzes', name: 'quizzes', component: Quizzes },
    { path: '/access', name: 'access', component: Access },
    { path: '/join', name: 'join', component: Join },
    { path: '/tools', name: 'tools', component: Tools },
    { path: '/tools/bingo', name: 'bingo', component: Bingo },
    { path: '/tools/alphabet', name: 'alphabet', component: Alphabet },
    {
      path: '/schedule', name: 'schedule',
      component: () => import(/* webpackChunkName: "about" */ './views/Schedule.vue')
    }
  ]
})
