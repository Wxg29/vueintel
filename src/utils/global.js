

//注册全局的组件

import Vue from "vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Carousel from "@/components/Carousel.vue"
import Carouselitem from "@/components/Carouselitem.vue"
import Uploadimg from "@/components/Uploadimg.vue"







Vue.component("Header", Header)
Vue.component("Footer", Footer)
Vue.component("Carousel", Carousel)
Vue.component("Carouselitem", Carouselitem)
Vue.component("Uploadimg", Uploadimg)


