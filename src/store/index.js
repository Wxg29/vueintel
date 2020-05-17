import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



import { axios } from "@/utils/axios"

// import {
//   VideoMoudle
// } from "./HomeVideo"


export default new Vuex.Store({
  state: {
    obj: {
      banner: [],
      videos: [],
      apply: [],
      online: [],
      study: []
    }
  },
  mutations: {
    // banner
    getHomeBanner(state, payload) {
      state.obj = { ...state.obj, banner: payload };
    },

    // 直播视频
    getHomeVideo(state, payload) {
      // state.Videos = {...state.userInfo,...payload}
      state.obj = { ...state.obj, videos: payload };
    },

    // 直播报名
    getHomeApply(state, payload) {
      state.obj = { ...state.obj, apply: payload };
    },

    //online
    getHomeOnline(state, payload) {
      state.obj = { ...state.obj, online: payload };
    },

    // 在线培训
    getHomeStudy(state, payload) {
      state.obj = { ...state.obj, study: payload };
    },
  },
  actions: {
    getHomeBanner({ commit }) {
      axios.get("/inl/api/activities/getWeb").then(res => {
        commit("getHomeBanner", res.data)
      })
    },

    // 直播视频
    getHomeVideo({ commit }) {
      axios.get("/inl/api/videos/getHome?videoTypeId=a84bfc00-ba42-11e8-b064-d77e6f2f1ad6&source=9").then(res => {
        commit("getHomeVideo", res.data)
      })
    },
    // 直播报名
    getHomeApply({ commit }) {
      axios.post("/inl/api/lives/findLive").then(res => {
        commit("getHomeApply", res.data.data)
      })
    },

    //online
    getHomeOnline({ commit }) {
      axios.get("/inl/api/videos/getHome?videoTypeId=1332ef10-f05d-11e8-bfd0-0be039df7995&source=9").then(res => {
        commit("getHomeOnline", res.data)
      })
    },

    // 在线培训
    getHomeStudy({ commit }) {
      axios.get("/inl/api/videos/getHome?videoTypeId=c9fb1c2a-c361-11e6-acb5-3fea19ef1fee&source=9").then(res => {
        commit("getHomeStudy", res.data)
      });
    }

  },
  modules: {
    // HomeVideosss: VideoMoudle
  }
})
