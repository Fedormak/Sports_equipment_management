import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../page/HomePage.vue'
import ComponentLogin from "./../components/ComponentLogin.vue"
import moduleUsers from "../../state/modules/users.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomePage,
      meta: {
        layout: 'MainLayout'
      },
    },
    {
      path: '/login',
      name: "login",
      component: ComponentLogin,
      meta: { layout: 'LoginPage' },
    },
  ],
})

let userlog = moduleUsers.getters.isAuth

router.beforeEach((to, from, next) => {
  if (to.name && to.path) {

    // если пользователь не авторизован и мы переходим на любую страницу кроме "login" и "registration",
    // то перенаправлять нас на страницу "login"
    console.log(userlog, "sdasad")
    if (!userlog && !["login"].includes(to.name)) {
      router.replace({name: 'login'});
      return;
    }
    next();
  }
});

export default router
