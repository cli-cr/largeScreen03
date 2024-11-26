<template>
  <div id="app">
    <!-- <Screen></Screen> -->
    <button @click="onFullScreen">全屏</button>
    <Screen-new></Screen-new>
    <!-- <bar-chart :chart-data="inspectData" /> -->
    <!-- <Ceshi/> -->
  </div>
</template>

<script>
import Screen from './components/Screen.vue'
import ScreenNew from './components/ScreenNew.vue'
// import BarChart from './components/BarChart'
// import Ceshi from './components/ceshi.vue'

export default {
  name: 'App',
  components: {
    Screen,
    ScreenNew
    // Ceshi
    // BarChart
  },
  mounted() {
    // this.initWebsocket()
  },
  
  methods: {
    initWebsocket() {
      const ws = new WebSocket("ws://82.157.123.54:9010/ajaxchattest")
      ws.onopen = function(){
        alert("websocket连接成功")
      }
      ws.onerror = function(){
        alert("websocket连接失败")
      }
      ws.onmessage = msg => {
        console.log(msg);
      }
    },
    // 全屏
    onFullScreen() {
      if (this.fullscreen) {
            this.$fullscreen.exit(); //退出全屏
        } else {
            // 通过ref拿到具体的、希望全屏展示的元素
            let dom = this.$refs.page; 
          //打开全屏
          this.$fullscreen.enter(dom, {
            wrap: false,
            callback: (f) => {
              this.fullscreen = f;
            }
        });
      }
    }

  },
}
</script>

<style  scoped> 
#app {
  width: 100vw;
  height: 100vh;
  background-color: #03050C;
  /* // overflow: hidden; */
}
</style>
