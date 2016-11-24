<template>
	<aside id="aside" class="app-aside hidden-xs bg-dark">
      <div class="aside-wrap">
        <div class="navi-wrap">
          <!-- nav -->
          <asnav></asnav>
          <!-- nav -->
        </div>
      </div>
  </aside>
</template>

<script>
	import Asnav from './Aside/Nav'
	export default {
	  components: {
	    Asnav
	  }
	}
</script>