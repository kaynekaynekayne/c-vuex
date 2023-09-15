<template>
    <div>
        <div v-for="item in news" :key="item.id">

        </div>
    </div>
</template>

<script>
    import {fetchNewsList} from '../api/index.js';

    export default {
        data(){
            return{
                news:[]
            }
        },
        created(){
            // this.$store.dispatch("FETCH_NEWS")
            fetchNewsList()
            .then(res=>this.news=res.data)
            .catch(err=>console.log(err))
        },
        computed:{
            news(){
                return this.$store.state.news
            }
        }
    }

</script>