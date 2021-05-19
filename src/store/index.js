import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},  //个人详情数据
    songList: {},  //播放页数据
    imgUrl: '',
    sUrl: ''
  },
  mutations: {
    addUser(state, payLode){
      state.user = payLode
    },
    addSongList(state, playLode){
      state.songList = playLode
    },
    addImgUrl(state, playLode){
      state.imgUrl = playLode
    },
    addSongsUrl(state, playLode){
      state.sUrl = playLode
    }
  },
  actions: {
  },
  modules: {
  }
})
