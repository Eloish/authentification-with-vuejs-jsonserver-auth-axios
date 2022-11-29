import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import DashbordView from '../views/DashbordView'
import TaskTodoAppView from '../views/TaskTodoAppView'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/register',
    name:'Singup',
    component:RegisterView
  },
  {
    path:'/login',
    name:'signin',
    component:LoginView
  },
  {
    path:'/dashbord',
    name:'alluser',
    component:DashbordView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:'/task',
    name:'mytasks',
    component:TaskTodoAppView,
    meta: {
      requiresAuth: true
    }
  },

 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
