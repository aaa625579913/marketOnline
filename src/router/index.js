import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const index = () => import( /* webpackChunkName: "dashboard" */ '../view/index/index')
const testRoom =() => import( /* webpackChunkName: "dashboard" */ '../view/testRoom/index')

const router = new VueRouter({

    mode: 'history',
    routes: [{
            path: '/',  //当没有路径参数的时，事图加载index组件
            name: 'index',
            component: index,
            // children:[{
            //     path: '/mainRoom',
            //     name: 'mainRoom',
            //     component: mainRoom
            // },]
        },
        {
            path: '/testRoom',  //当没有路径参数的时，事图加载index组件
            name: 'testRoom',
            component: testRoom,
        },
    ]

})


export default router