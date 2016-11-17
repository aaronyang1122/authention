import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index';
import SignIn from './components/Signin';
import Store from '../store/index';

Vue.use(VueRouter);

const route = new VueRouter({
  routes: [
    {
    	path: '/signin',
    	name: 'signin',
    	component: SignIn
    },
    {
    	path: '/',
    	name: 'index',
    	component: Index
    }
  ]
});

route.beforeEach((to, from, next) => {
	// if store has no token there is not allow to login
	if (to.name !== 'signin' && Store.state.login.token === null) {
		next('/signin');
	} else {
		next();
	}
})
export default route;
