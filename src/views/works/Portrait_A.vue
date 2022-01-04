<template>
    <v-container>
        <v-layout align-center column justify-center>

        
           
            <iframe :width="width" :height="height" src="https://portrait-a-mov.s3.ap-northeast-1.amazonaws.com/index.html" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div style="color:white; width: 60%; ">
            <div style="border-left: 2px solid #999;font-size:10px;padding-left: 5px;margin-top:30px;">
                <p>注意事項 | キーボード操作を含むため、モバイル端末ではご覧になれません。
                <br>推奨ブラウザ | Google Chrome (シークレットモードではうまく動作しない場合があります)
                <br>操作方法 | 移動:WASDキー, 視点: ← → キー </p>
            </div>
            <div style="margin-top:50px;">
            <h1>肖像A</h1>
            <p style="color:grey;">奥田葉月</p>
            <p style="border-left: 2px solid #999;font-size:14px;padding-left: 10px;margin-top:30px;">東京大学制作展という展示に向けて制作した作品である。作品内でも言及されているように、制作展に向けて友人にインタビューを敢行しているという設定のモキュメンタリーの形式をとっている。
鍵になっている技術であるモーションキャプチャは、通常CGキャラクターの動きを現実の身体運動から作成するために用いられ、アバターとモーションは相補的にキャラクターの存在感を形成する。そしてそこではスーツアクター自身の存在は疎外されている。本作は、一人の人間を多様な容姿で表現することと現実世界への言及を通して、アバターとアクターの不一致を明示しながら、抜け殻として不可視化されたスーツアクターの存在感を観客の想像力を以て再構築することを目指した作品である。
モチーフとして取り上げた「肖像」という語は人物の視覚的な表象を表すが、ここでは人物の視覚表現を通して非視覚的な表象を構築する。</p>
            <!-- <p>共同制作者: 小池亮介, 児玉大樹, 鈴木大智</p> -->
            </div>
            <p>Links: 
            <a target="_blank" href = "https://vrchat.com/home/launch?worldId=wrld_c23360d0-f89f-4996-b607-ffa091ae6ad5">VRChat World</a>, 
            <a target="_blank" href = "https://iiiexhibition.com/log/iiiEx2021/"> 東京大学制作展 0PUNK </a>, 
            <a target="_blank" href = "/#/postscript"> あとがき </a>
            </p>
            </div>



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