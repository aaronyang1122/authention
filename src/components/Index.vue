<template>
	<section class="index">
		
		<!-- header -->
		<header-wrap></header-wrap>
		<!-- / header -->
		<!-- aside -->
		<aside-wrap></aside-wrap>
		<!-- / aside -->
		<!-- content -->
		<content-wrap>
			<!--<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
			<grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
			<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
			<rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
			<beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
			<sync-loader :loading="loading" :color="color" :size="size"></sync-loader>
			<rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
			<fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader>
			<pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
			<square-loader :loading="loading" :color="color" :size="size"></square-loader>
			<scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
			<skew-loader :loading="loading" :color="color" :size="size"></skew-loader>
			<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
			<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
			<bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>          
			<dot-loader :loading="loading" :color="color" :size="size"></dot-loader>-->
			
		</content-wrap>
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
	  }
	}
</script>

