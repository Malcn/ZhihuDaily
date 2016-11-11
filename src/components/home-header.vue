<template>
    <div>
        <div class="list-header">
            <span class="imglist cursor" @click="spanclick"></span>
            <p>{{title}}</p>
        </div>
    </div>
</template>

<script>
import eventHub from '../utils/bus.js'

export default {
    components:{},
    props:{
       title:{
           type:String
       }
    },
    data(){
        return{}
    },
    computed:{},
    methods:{
        spanclick()
        {
           eventHub.$emit('sideBarShow',true);
        }
    },
    watch:{},
    mounted(){},
    created(){},
    beforeDestroy(){}
}

</script>

<style lang="sass">

</style>