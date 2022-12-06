import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('@/views/home/HomePage.vue'),
    meta: {
      user: true,
      article: true
    }
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('@/views/home/HomePage.vue'),
    meta: {
      user: true,
      article: true
    }
  },
  {
    path: '/blog',
    name: '博客',
    component: () => import('@/views/home/HomePage.vue'),
    meta: {
      user: false,
      article: true
    },
    children: [
      {
        path: 'detail',
        component: () => import('@/views/Artdetail/ArticleDetail.vue'),
        meta: {
          user: true
        }
      },
      {
        path: 'cate',
        component: () => import('@/views/CateArticle/CateArtPage.vue'),
        meta: {
          user: true
        }
      },
      {
        path: 'tag',
        component: () => import('@/views/tagArtPage/TagArtPage.vue'),
        meta: {
          user: true
        }
      },
      {
        path: 'search',
        component: () => import('@/views/search/SearchPage.vue'),
        meta: {
          user: true
        }
      }
    ]
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
