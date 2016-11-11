<template>
	<div class="sidebar">
		<ul>
			<li>
				<p class="cursor" @click="tohome">首页</p>
			</li>
			<li v-for="item in list">
				<p class="cursor" @click="todetail(item.id)">{{item.name}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
import api from '../api/index.js'
import eventHub from '../utils/bus.js'
import { mapGetters, mapActions } from 'vuex'
export default {
    components:{},
	props:{
       show:{
		   type:Boolean
	   }
	},
    data(){
        return{
		}
    },
    computed:mapGetters({
		list:'themes'
	}),
    methods:{
		tohome()
		{
            this.$router.push({ name: 'index'});
			eventHub.$emit('sideBarShow',false);
		},
		todetail(id)
		{
			this.$router.push({ name: 'themedetail', params: { id: id }});
			eventHub.$emit('sideBarShow',false);

		},
		...mapActions(['setthemes'])
	},
    watch:{},
    mounted(){
        let _this = this;
		if(!_this.list.length)
		{
			api.getTopics().then((res)=>{
				if(res.ok)
				{
					_this.setthemes(res.body.others)
				}
			})
		}
	},
    created(){},
    beforeDestroy(){}
}

</script>

<style lang="sass">

</style>