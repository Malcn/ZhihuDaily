<template>
	<div class="header w_640">
		<mt-swipe class="h_640" :auto="4000">
			<mt-swipe-item v-for="(item,index) in top_stories">
				<router-link :to="{ name: 'detail', params: { id: item.id }}">
					<div class="hauto bagimg cursor" v-lazy:background-image="zhihuimg(item.image)">
						<p class="topp" v-text="item.title"></p>
					</div>
				</router-link>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
import { zhihuimg } from '../utils/filter'

export default {
    components:{},
    props:{
        top_stories:{
            type:Array
        }
    },
    data(){
        return{}
    },
    computed:{},
    methods:{
        zhihuimg
    },
    watch:{},
    mounted(){},
    created(){},
    beforeDestroy(){}
}

</script>

<style lang="sass">

</style>