import Vue from 'Vue'
import Favlist from './comonents/Favlist.vue'

Vue.config.debug = true;

window.onload = function () {
    new Vue({
        el: '#app',
        components: {
            'my-component': Favlist
        }
    })
}