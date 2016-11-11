<template>
    <div>
        <div class="list-header">
            <span class="imglist cursor" @click="spanclick"></span>
            <p>{{title}}</p>
        </div>
        <img v-if="model.background" :src="zhihuimg(model.background)" style="height:640px;width:640px;" alt="">
        <ul class="topul">
            <li v-for="store in stories">
                <router-link :to="{ name: 'detail', params: { id: store.id }}">
                    <div class="itemdiv">
                        <img v-if="store.images" v-lazy="zhihuimg(store.images[0])">
                        <p v-text="store.title"></p>
                    </div>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
import api from '../api/index.js'
import eventHub from '../utils/bus.js'
import { zhihuimg,datetimef } from '../utils/filter'

export default {
    name: 'themelist',
    components:{},
    data(){
        return{
            stories:[],
            title:'',
            model:{}
        }
    },
    computed:{
        themeId(){
           return this.$route.params.id;
        }
    },
    methods:{
        spanclick()
        {
           eventHub.$emit('sideBarShow',true);
        },
        zhihuimg
    },
    watch:{
        'themeId':function(val)
        {
            if(val)
            {
                let _this=this;
                api.getTopicsById(val).then((res)=>{
                    if(res.ok)
                    {
                        _this.stories=res.data.stories;
                        _this.title=res.data.name;
                        _this.model=res.data;
                    }   
                })
            }
        }
    },
    mounted(){
        let _this=this;
        api.getTopicsById(_this.themeId).then((res)=>{
            if(res.ok)
            {
                _this.stories=res.data.stories;
                _this.title=res.data.name;
                _this.model=res.data;
            }   
        })
    },
    created(){},
    beforeDestroy(){}
}

</script>

<style lang="sass">

</style>