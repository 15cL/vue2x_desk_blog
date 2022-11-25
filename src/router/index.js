import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/views/home/HomePage.vue')
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/HomePage.vue')
  }
]

const router = new VueRouter({
  routes
})

// 点击重复路径报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err)
}
export default router
