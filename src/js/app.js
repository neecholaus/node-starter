window.Vue = require('vue/dist/vue.js');

Vue.component('test', require('./components/test.vue').default);

new Vue({el: '#main'});
