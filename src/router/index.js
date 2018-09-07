import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/markdownEdit',
      name: 'markdownEdit',
      component: () => import(/* webpackChunkName: "page-wxuser" */ '@/view/markdownEdit/markdownEdit')
    },
    {
      path: '/testNode',
      name: 'testNode',
      component: () => import(/* webpackChunkName: "page-wxuser" */ '@/view/testNode/testNode')
    },
    {
      path: '/',
      name: 'err',
      component: () => import(/* webpackChunkName: "page-wxuser" */ '@/components/HelloWorld')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {                                      
   console.log(111);
    next({name:'err'});  
  } else {
    next();                                                                          
  }
});
export default router
