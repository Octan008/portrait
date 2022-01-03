 <template>
   <v-app-bar app color="#00331b" dark elevate-on-scroll>
     <v-toolbar-title style="font-family:'MS Pゴシック',sans-serif;font-weight: bold; ">
       <!-- <v-avatar class="mr-2">
         <v-img :src="require('../assets/logo.png')" />
       </v-avatar> -->
        肖像A
     </v-toolbar-title>
     <v-spacer></v-spacer>

     <!-- <v-btn icon v-for="sns in snss" :key="sns.title" :href="sns.path" target="_blank" rel="noopener noreferrer">
         <font-awesome-icon :icon="['fab', sns.icon]" size="2x" />
     </v-btn> -->

     <!-- <template v-slot:extension>
       <v-tabs align-with-title glow="false" v-model="active">
         <v-tabs-slider></v-tabs-slider>
         <v-tab v-for="view in views" :key="view.title" :to="view.path">
           {{ view.title }}

         </v-tab>
       </v-tabs>
     </template> -->
   </v-app-bar>
 </template>



 <script>
   export default {
     props: {
       views: Array,
       snss: Array
     },data() {
       return {
         active: 'tabA',
         position: {
           tabA: null,
           tabB: null,
         },
       }
     },
     mounted() {
       // イベントリスナの追加
       window.addEventListener('scroll', this.handleScroll);
     },
     unmouted() {
       // イベントリスナの削除
       window.removeEventListener('scroll', this.handleScroll);
     },
     methods: {
       handleScroll() {
         // 現在アクティブなタブのスクロール位置を保持
         this.position[this.active] = window.scrollY;
       }
     },
     watch: {
       // activeの変更を検知
       active() {
         // 切り替え後のタブですでに保持されたスクロール位置があればその位置を取得
         const y = this.position[this.active] || 0;
         // 即時スクロールすると、切り替え前のタブの長さ ＜ 切り替え後のタブの長さである場合に、切り替え前のタブの最大値までしかスクロールされないことがある（切り替え後のタブの内容が描画される前にスクロールしようとする）ので、setTimeoutでタイミングを少しずらす
         setTimeout(() => {
           window.scroll(0, y);
         }, 200);
       },
     },
   }
 </script>