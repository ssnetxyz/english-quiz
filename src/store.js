import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    players: [],
  },
  mutations: {
    'REGISTER_SOUND_PLAYER': function (state, payload) {
      state.players.push(payload.player);
    },
    'UNREGISTER_SOUND_PLAYER': function (state, payload) {
      const index = state.players.indexOf(payload.player);
      state.players.splice(index, 1);
    },
  },
  actions: {
    'STOP_SOUND_PLAYERS': function ({ state }) {
      for (let player of state.players) {
        player.resetTracking();
      }
    },
  }
})
