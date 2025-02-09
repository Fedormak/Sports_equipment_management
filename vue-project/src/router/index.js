import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../page/PageHome.vue'
import ComponentLogin from "./../components/ComponentLogin.vue"
import store from './../../state/store.js'
import PageInventory from "../page/PageInventory/PageInventory.vue"
import PageApplications from "@/page/PageApplications.vue";
import PageReplacement from "@/page/Replacement/PageReplacement.vue";
import PagePurchases from "@/page/PagePurchases.vue";
import PageReports from "@/page/PageReports.vue";
import itemMore from '../page/PageInventory/modulePageInventory/itemMore.vue'
import itemNew from '../page/PageInventory/modulePageInventory/itemNew.vue'


const router = createRouter({
  store: store,
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: PageHome,
      meta: {
        layout: 'MainLayout'
      },
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: PageInventory,
      props: true,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: "/inventory/createElement",
      name: "addNewinventory",
      component: itemNew,
      props: true,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      name: "Item",
      path: '/inventory/:idInventory',
      component: itemMore,
      props: true  
    },
    {
      path: '/applications',
      name: 'applications',
      component: PageApplications,
      props: true,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/replacement',
      name: 'replacement',
      component: PageReplacement,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/purchases',
      name: 'purchases',
      component: PagePurchases,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: PageReports,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/login',
      name: "login",
      component: ComponentLogin,
      meta: { layout: 'LoginPage' },
    },
  ],
})


router.beforeEach((to, from, next) => { 
    console.log(store.getters.isAuth)
    // если пользователь не авторизован и мы переходим на любую страницу кроме "login" и "registration",
    // то перенаправлять нас на страницу "login"
    if (!store.getters.isAuth && !["login"].includes(to.name)) {
      router.replace({name: 'login'});
      return;
    }
    next();
});

export default router
