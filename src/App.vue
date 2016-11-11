<template>
	<div class="app">
		<transition name="slide-fade">
			<side-bar v-if="sideBarShow"></side-bar>
		</transition>
		<div class="divshadow" v-show="sideBarShow" @click="sideBarShow=false"></div>
		<!--页面子路由-->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>

	</div>
</template>

<script>
import sideBar from './components/sidebar.vue'
import eventHub from './utils/bus.js'

export default {
	name: 'App',
    components:{sideBar},
    data(){
        return{
			sideBarShow:false
		}
    },
    computed:{},
    methods:{
    },
    watch:{},
    mounted(){},
    created(){
		let _this=this;
		eventHub.$on('sideBarShow',function(value){
            _this.sideBarShow=value;
		})
	},
    beforeDestroy(){
		eventHub.$off('sideBarShow')
	}
}

</script>

<style lang="sass">
	$fontSize: 14px;
	body {
		background: #efeded
	}
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	
	.slide-fade-enter-active,
	.slide-fade-leave-active {
		transition: all 0.3s ease;
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		margin-left: -200px;
		opacity: 0;
	}
</style>