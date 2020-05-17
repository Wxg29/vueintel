

//直播视频模块

import { axios } from "@/utils/axios"

export const VideoMoudle = {
    namesapced: true,   //命名空间
    state: {
        Videos: {}
    },
    mutations: {
        getHomeVideo(state, payload) {
            // state.Videos = {...state.userInfo,...payload}
            state.Videos = payload;
        },
    },
    actions: {
        getHomeVideo({ commit }) {
            axios.get("/intel/videos/getHome?videoTypeId=a84bfc00-ba42-11e8-b064-d77e6f2f1ad6&source=9").then(res => {
                commit("getHomeVideo", res.data.data)
            })
        }
    }
}