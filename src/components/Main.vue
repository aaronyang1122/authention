<template>
	<section class="index">
		
		<!-- header -->
		<header-wrap></header-wrap>
		<!-- / header -->
		<!-- aside -->
		<aside-wrap></aside-wrap>
		<!-- / aside -->
		<!-- content -->
		<content-wrap></content-wrap>
		<!-- / content -->
		<!-- footer -->
		<foot></foot>
		<!-- / footer -->
	</section>
</template>

<script>
	import HeaderWrap from './Header'
	import AsideWrap from './Aside'
	import Foot from './Footer'
	import ContentWrap from './Content'
	
	import PulseLoader from 'vue-spinner/src/PulseLoader'
	import GridLoader from 'vue-spinner/src/GridLoader'
	import ClipLoader from 'vue-spinner/src/ClipLoader'
	import RiseLoader from 'vue-spinner/src/RiseLoader'
	import BeatLoader from 'vue-spinner/src/BeatLoader'
	import SyncLoader from 'vue-spinner/src/SyncLoader'
	import RotateLoader from 'vue-spinner/src/RotateLoader'
	import FadeLoader from 'vue-spinner/src/FadeLoader'
	import PacmanLoader from 'vue-spinner/src/PacmanLoader'
	import SquareLoader from 'vue-spinner/src/SquareLoader'
	import ScaleLoader from 'vue-spinner/src/ScaleLoader'
	import SkewLoader from 'vue-spinner/src/SkewLoader'
	import MoonLoader from 'vue-spinner/src/MoonLoader'
	import RingLoader from 'vue-spinner/src/RingLoader'
	import BounceLoader from 'vue-spinner/src/BounceLoader'
	import DotLoader from 'vue-spinner/src/DotLoader'
	export default {
	  components: {
	    HeaderWrap,
	    AsideWrap,
	    Foot,
	    ContentWrap,
	    PulseLoader,
	    GridLoader,
	    ClipLoader,
	    RiseLoader,
	    BeatLoader,
	    SyncLoader,
	    RotateLoader,
	    FadeLoader,
	    PacmanLoader,
	    SquareLoader,
	    ScaleLoader,
	    SkewLoader,
	    MoonLoader,
	    RingLoader,
	    BounceLoader,
	    DotLoader
	  },
	  created () {
	  }
	}
</script>

