import Vue from 'vue';
import Router from 'vue-router';
import Search from './components/Form.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'form',
            component: Form
        }
    ]
})