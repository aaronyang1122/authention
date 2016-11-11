import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from './components/Index';
import SignIn from './components/Signin';

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
	console.log(to);
	if (to.name !== 'signin') {
		next('/signin');
	} else {
		next();
	}
})
export default route;
