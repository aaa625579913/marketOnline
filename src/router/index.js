import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// vue router 报错： Uncaught (in promise) NavigationDuplicated {_name:""NavigationDuplicated"... 的解决方法
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const index = () => import( /* webpackChunkName: "dashboard" */ '../view/index/index')
// const testRoom = () => import( /* webpackChunkName: "dashboard" */ '../view/testRoom/index')
const cart = () => import( /* webpackChunkName: "dashboard" */ '../view/cart/index')
const order = () => import( /* webpackChunkName: "dashboard" */ '../view/order/index')
const goods = () => import( /* webpackChunkName: "dashboard" */ '../view/goods/index')
const mainRoom = () => import( /* webpackChunkName: "dashboard" */ '../view/mainRoom/index')

const router = new VueRouter({

    mode: 'history',
    routes: [{
            path: '/', //当没有路径参数的时，事图加载index组件
            component: index,
            redirect: '/mainRoom',
            children: [{
                    path: 'mainRoom',
                    name: 'mainRoom',
                    component: mainRoom,
                },
                {
                    path: 'cart',
                    name: 'cart',
                    component: cart,
                },
                {
                    path: 'order',
                    name: 'order',
                    component: order,
                },
                {
                    path: 'goods',
                    name: 'goods',
                    component: goods,
                },
            ]
        },

    ]

})


export default router