import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from './components/Main';
import SignIn from './components/Signin';
import Profile from './components/Profile';
import Token from './components/Token';
import Check from './components/Token/Check';
import Unbind from './components/Token/Unbind';
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
    	path: '/main',
    	name: 'main',
    	component: Main,
    	children: [
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
        	path: 'token',
        	name: 'token',
        	component: Token,
        	children: [
        		{
        			path: 'check',
        			name: 'check',
        			component: Check
        		},
        		{
        			path: 'unbind',
        			name: 'unbind',
        			component: Unbind
        		}
        	]
        }
      ]
    }
  ]
});

route.beforeEach((to, from, next) => {
	// if store has no token there is not allow to login
	if (Store.state.login.token !== null && to.name === 'signin') {
		// 已登录
		next('/main/profile');
	} else if (to.name !== 'signin' && Store.state.login.token === null) {
		// 未登录
		next('/signin');
	} else {
		next();
	}
})
export default route;
