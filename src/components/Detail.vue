<template>
    <div>
        <link rel="stylesheet" href="./src/assets/news_qa.auto.css">
        <link rel="stylesheet" :href="zhihucss">
        <div class="default-header">
            <span class="imgback cursor" @click="goBack"></span>
            <span class="imgcomment cursor">{{extra.comments}}</span>
            <span class="imgpraise cursor">{{extra.popularity}}</span>
        </div>
        <img v-if="model.image" :src=" zhihuimg(model.image) " style="height:640px;width:640px;" alt="">
        <div v-html="zhihuimg(model.body)"></div>

    </div>
</template>

<script>
import api from '../api/index.js'
import { zhihuimg } from '../utils/filter'
export default {
    components:{},
    data(){
        return{
            model:{body:''},
            extra:{},
            aaa:"aa",
            zhihucss:''
        }
    },
    computed:{
        newsId(){
           return this.$route.params.id;
        }
    },
    methods:{
        goBack () {
            window.history.back()
        },
        zhihuimg},
    watch:{},
    mounted(){

    },
    beforeRouteEnter (to, from, next){
        next(_this => {
             document.body.scrollTop=0;
            api.getNewsById(_this.newsId).then((res)=>{
                if(res.ok)
                {
                   _this.model=res.data;
                   _this.zhihucss=res.data.css[0];
                }
            })
            api.getNewsInfoById(_this.newsId).then((res)=>{
                if(res.ok)
                {
                   _this.extra=res.body;
                }
            })
        })
     
    },
    created(){

    },
    beforeDestroy(){}
}

</script>

<style lang="sass">
    .img-place-holder {
        height: 0px!important;
    }
</style>