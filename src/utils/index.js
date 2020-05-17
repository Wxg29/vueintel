export var foots = [
    { txt: "首页", name: "home", path: "/main/home", icon: "&#xe603;" },
    { txt: "项目", name: "pmp", path: "/main/pmp", icon: "&#xe995;" },
    { txt: "资讯", name: "science", path: "/main/science", icon: "&#xe64c;" },
    { txt: "我的", name: "mine", path: "/main/mine", icon: "&#xe62e;" }
]






//混入动画
// beforeRouteEnter    进入这个组件之前
// beforeRouteLeave    离开这个组件之前  
export const animate = {
    data() {
        return {
            animateClass: "enter"
        }
    },
    beforeRouteEnter(to, from, next) {
        next()
    },
    beforeRouteLeave(to, from, next) {
        this.animateClass = "leave";
        setTimeout(() => {
            next()
        }, 200)

    },
}