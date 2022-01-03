<template>
  <v-app>
    <Header :views="views" :snss="snss"/>

    <v-content style="background-color:#333333;">
      <router-view>
      <v-fade-transition mode="out-in">
        <portrait/>
        </v-fade-transition>
      </router-view>
      
    </v-content>
    <v-footer app dark color="#00331b">
      <v-flex text-center>
        <!-- <h4 class="font-weight-light">&copy; 2021 - Hatsuki Takahashi</h4> -->
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import portrait from './views/works/Portrait_A.vue'
// import  from './components/Header.vue'
  export default {
    name: 'App',
    components: {
      Header,
      portrait
    },
    
    data() {
      return {
        views: [
          {
            title: 'About',
            icon: 'dashboard',
            path: '/',
            external: false
          },
          {
            title: 'About',
            icon: 'dashboard',
            path: '/postscript',
            external: false
          }
        ],

        snss:[
          {
          title:'github',
          icon: 'github',
          path: 'https://github.com/octan008'
          }
        ]
      }
    }
  }
</script>