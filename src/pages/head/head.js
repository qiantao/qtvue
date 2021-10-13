// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Head from './Head.vue'
import Left from "./Left.vue"
import Main from "./Main.vue"
import Setting from "./Setting.vue";
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#head',//html中的id为home的div
    router,
    components: { Head },
    template: '<Head/>'
})

new Vue({
    el: '#left',//html中的id为home的div
    router,
    components: { Left },
    template: '<Left/>'
})
new Vue({
    el: '#main',//html中的id为home的div
    router,
    components: { Main },
    template: '<Main/>'
})
new Vue({
    el: '#setting',//html中的id为home的div
    router,
    components: { Setting },
    template: '<Setting/>'
})
