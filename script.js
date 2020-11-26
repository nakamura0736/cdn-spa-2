const routes = [
  { path: '/', component: httpVueLoader('page1.vue') },
  { path: '/page2', component: httpVueLoader('page2.vue') },
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')