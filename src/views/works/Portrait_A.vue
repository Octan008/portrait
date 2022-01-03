<template>
    <v-container>
        <v-layout align-center column justify-center>

        
           
            <iframe :width="width" :height="height" src="https://portrait-a-mov.s3.ap-northeast-1.amazonaws.com/index.html" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>


        </v-layout>
    </v-container>
</template>

<script>
    export default {

        components: {

        },
        computed:{
            width: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 350
                }else{
                    return 560*1.2
                }
            },
            height: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 197
                }else{
                    return 315*1.2
                }
            }
        }
    }
</script>