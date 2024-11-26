<template>
  <div class="content bg">
    <dv-full-screen-container>
      <!-- 第一行 -->
      <div class="module-box">
        <!-- 左边 -->
        <div style="flex: 0 1 30%">
          <dv-decoration-10 style="height:5px;" />
        </div>
        <!-- 中间 -->
        <div style="flex: 0 1 40%">
          <!-- 中间要分成三等份 -->
          <div class="d-flex">
            <!-- 左 -->
            <dv-decoration-8 style="height:30px; flex:1" />
            <!-- 中 -->
            <div style="flex:1" class="tc box-middle">智慧工厂数据中心</div>
            <!-- 右 -->
            <dv-decoration-8 :reverse="true" style="height:30px; flex:1" />
          </div>
        </div>
        <!-- 右边 -->
        <div style="flex: 0 1 30%">
          <dv-decoration-10 style="height:5px; transform:rotateY(180deg)" />
        </div>
      </div>
      <!-- 第二行 -->
      <div class="module-box">
        <!-- 左边 -->
        <div style="flex:0 1 25%">
          <dv-border-box-1 style="width:100%;height:150px">
            <dv-capsule-chart :config="config" style="width:100%;height:150px" />
          </dv-border-box-1>
          <dv-border-box-2 style="width:100%;height:150px">
            <dv-water-level-pond :config="config1" style="width:100%;height:150px" />
          </dv-border-box-2>
          <dv-border-box-8 style="width:100%;height:150px">dv-border-box-8</dv-border-box-8>
        </div>
        <!-- 中间 -->
        <div style="flex:0 1 50%">
          <dv-border-box-2 style="width:100%;height:450px">
            <dv-flyline-chart :config="config2" style="width:100%;height:450px;" />
          </dv-border-box-2>
        </div>
        <!-- 右边 -->
        <div style="flex:0 1 25%">
          <dv-border-box-2 style="width:100%;height:225px">
            <dv-capsule-chart :config="config" style="width:100%;height:225px" />
          </dv-border-box-2>
          <dv-border-box-1 style="width:100%;height:225px; ">
            <!-- dv-border-box-1 -->
            <!-- 在这里测试echarts -->
            
              <bar-chart />
              <!-- <pie-chart/> -->
            
            
          </dv-border-box-1>
        </div>
      </div>
      <!-- 第三行 -->
      <div class="module-box">
        <div style="flex:0 1 50%">
          <dv-border-box-1 style="width:100%;height:150px">dv-border-box-1</dv-border-box-1>
        </div>
        <div style="flex:0 1 25%">
          <dv-border-box-1 style="width:100%;height:150px">dv-border-box-1</dv-border-box-1>
        </div>
        <div style="flex:0 1 25%">
          <dv-border-box-1 style="width:100%;height:150px">dv-border-box-1</dv-border-box-1>
        </div>
      </div>
      
    </dv-full-screen-container>
  </div>
</template>

<script>
import BarChart from '../components/BarChart'
import PieChart from '../components/PieChart'
export default {
  name: 'Screen',
  components:{BarChart,PieChart},
  data() {
    return {
      config: {
        data:[
          {
            name: '南阳',
            value: 167
          },
          {
            name: '周口',
            value: 67
          },
          {
            name: '漯河',
            value: 123
          },
          {
            name: '郑州',
            value: 55
          },
          {
            name: '西峡',
            value: 98
          },
        ]
      },
      config1:{
        data: [66]
      },
      config2:{
        centerPoint: [0.48, 0.35],
        points: [
          [0.52, 0.23],
          [0.43, 0.29],
          [0.59, 0.35],
          [0.53, 0.47],
          [0.45, 0.54],
          [0.36, 0.38],
          [0.62, 0.55],
          [0.56, 0.56],
          [0.37, 0.66],
          [0.55, 0.81],
          [0.55, 0.67],
          [0.37, 0.29],
          [0.20, 0.36],
          [0.76, 0.41],
          [0.59, 0.18],
          [0.68, 0.17],
          [0.59, 0.10]
        ],
        bgImgUrl:  require('../assets/img/map.jpg'),
        inspectData: {name:'',data:[]},
      }
    };
  },
  mounted() {
    this.initData();
  },
  methods:{
    initData(){
      // this.inspectData.name = '当日巡检班组排名';
      // this.inspectData.data = data;
    }
  }
}
</script>

<style scoped>
</style>