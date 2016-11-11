<template>
	<aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
        <div class="navi-wrap">
          <!-- user -->
          <user></user>
          <!-- / user -->
          <!-- nav -->
          <asnav></asnav>
          <!-- nav -->
          <!-- aside footer -->
          <foot></foot>
          <!-- / aside footer -->
        </div>
      </div>
  </aside>
</template>

<script>
	import User from './Aside/User'
	import Asnav from './Aside/Nav'
	import Foot from './Aside/Footer'
	export default {
	  components: {
	    User,
	    Asnav,
	    Foot
	  }
	}
</script>