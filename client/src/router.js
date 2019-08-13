import Vue from 'vue';
import Router from 'vue-router';
import Release from './components/Release.vue';
import Result from './components/Result.vue';
import Mix from './components/Mix.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'realese',
            component: Release,
            meta: {title: 'releases'}
        },
        {
            path: '/result',
            name: 'result',
            component: Result,
            meta: {title: 'result'}
        },
        {
            path: '/mix',
            name: 'mix',
            component: Mix,
            meta: {title: 'mix'}
        }
    ]
})