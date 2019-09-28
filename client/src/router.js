import Vue from 'vue';
import Router from 'vue-router';
import Release from '@/views/Release.vue';
import Result from '@/views/Result.vue';
import Mix from '@/views/Mix.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'realese',
            component: Release,
        },
        {
            path: '/result',
            name: 'result',
            component: Result
        },
        {
            path: '/mix',
            name: 'mix',
            component: Mix,
        }
    ]
})