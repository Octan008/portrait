<template>
    <v-container>
        <v-layout align-center column justify-center>
            <div style="color:white;font-family:'MS Pゴシック';width:70%;">
<h1 style="padding:20px;">あとがき</h1><h1>
<div class="container">

<p>
最後まで作品をご覧いただきありがとうございます。この作品は、モーションキャプチャを用いて、容姿に依存しない身体についての情報を取り出し、多様な容姿でそれを再構築してみようという作品です。
</p>
<p>
顔を知らないけれど表情を知っている、背格好を知らないけれど身のこなしを知っている、という現実ではなかなか巡り合わない形で他者と対峙する作品を目指しました。
</p>
<p>
また、当人の似姿でもない、静止画でもないものが額縁に入れられて並ぶこの空間をいかにして「肖像」と呼べるのか、という問いがこの作品の中心にはあります。
</p>
<p>
その答えとして本作では、「肖像」という言葉を抽象化して、「何者かについての痕跡の集積であって、相対するにあたってそれをその人物自身と同一視せざるをえない閉じた情報群」と定義しています。要するに、差し当たって当人について理解するための材料は目の前にあるものがすべてである、という状態における、その材料たちです。
</p>
<p>
肖像画というのはまさにそのようなものとして描かれてきたのでしょうし、たとえば街ですれ違うだけの人についての記憶や、誰かのSNSの投稿などもシチュエーションによっては肖像たりえるかもしれません。
</p>
<p>
これはフィクションを支える仕組みでもあって、例えば映画作品で描かれるシーンは作品世界のごく一部ですが、そのごく一部が観客にとってはすべてになります。作品の外部についてどんな風に想像を巡らしても、その答え合わせが叶わないということが保証されていることは、むしろ物語を魅力的なものにしていると思います。
</p>
<p>
そして、いつでも断片的な事実から想像力を通して世界と関わっている我々にとって、フィクションとノンフィクションの境界は曖昧です。
</p>
<p>
本作は作り話ですが、顔も知らない、存在もしない誰かの姿が皆様の頭の片隅に残っていたら本望です。
</p>
<p style="text-align:right;">
    髙橋初来
</p>
</div>
</h1></div>
        </v-layout>
    </v-container>
</template>
<style>
html{
    background-color:#0f1a33;
    color:white;
}
.whole{
    margin:auto;
    margin-top:40px;
    width:800px;
}
.container{
    font-size:16px;
}

</style>
<script>
    export default {

        components: {

        },
        computed:{
            width: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 350
                }else{
                    return 560
                }
            },
            height: function(){
                if(this.$vuetify.breakpoint.smAndDown){
                    return 197
                }else{
                    return 315
                }
            }
        }
    }
</script>