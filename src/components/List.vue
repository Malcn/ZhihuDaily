<template>
	<div>
		<ul class="topul">
			<li v-for="item in list" :key="item.date">
				<ul>
					<p class="week">{{item.date | datetimef}}</p>
					<li v-for="store in item.stories">
						<router-link :to="{ name: 'detail', params: { id: store.id }}">
							<div class="itemdiv">
								<img v-lazy="zhihuimg(store.images[0])">
								<p v-text="store.title"></p>
							</div>
						</router-link>
					</li>
				</ul>
			</li>
			<li v-show="loading" style="text-align:center">
				<img src="/src/assets/images/loading-0.gif">
			</li>
		</ul>
	</div>
</template>

<script>
import { zhihuimg,datetimef } from '../utils/filter'

export default {
    components:{},
    props:{
        list:{
            type:Array
        }
    },
    data(){
        return{
            loading:false
        }
    },
    computed:{},
    methods:{
        zhihuimg,
        datetimef
    },
    watch:{},
    mounted(){},
    created(){},
    beforeDestroy(){
    }
}

</script>

<style lang="sass">

</style>