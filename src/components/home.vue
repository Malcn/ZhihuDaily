<template>
    <div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="true" infinite-scroll-immediate-check=true infinite-scroll-distance="100">
            <!--header-->
            <home-header title="首页"></home-header>
            <!--轮播组件-->
            <slider :top_stories="top_stories" v-cloak></slider>
            <!--首页列表-->
            <list :list="news"></list>
        </div>

    </div>
</template>

<script>
import api from '../api/index.js'
import slider from './topSwipeList.vue'
import list from './List.vue'
import homeHeader from './home-header.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'home',
    components:{slider,list,homeHeader},
    data(){
        return{
            slidebarshow:false,
            list:[],
            themelist:{},
            loading:false,
            top_stories:[]
        }
    },
    computed:{
        ...mapGetters([
            'news'
        ])
    },
    methods:{
        loadMore() {
            if(this.$route.name==="index"&&!this.loading)
            {
                let _this=this;
                _this.loading=true;
                api.getNewsByDate(_this.news[_this.news.length-1].date).then((res)=>{
                    _this.loading=false;
                    if(res.ok)
                    {
                        _this.addnews(res.data);
                    }
                })
            }
        },
        ...mapActions([
            'addnews'
        ])
    },
    watch:{},
    mounted(){
        let _this=this;
        api.getNews().then((res)=>{
            console.log('api',res);
            if(res.ok)
            {
                _this.addnews(res.data);
                _this.top_stories=res.data.top_stories;
                 _this.$nextTick(function(){
                     document.body.scrollTop=0;
                 })
            }
        });
    },
    created(){},
    beforeDestroy(){}
}

</script>

<style lang="sass">

</style>