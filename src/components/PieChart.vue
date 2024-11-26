<template>
  <div>
    <div id="main" style="width: 90%; height: 200px"></div>
  </div>
</template>

<script>
import Charts from "@jiaminghi/charts";
export default {
  name: "",
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      // debugger
      const container = document.getElementById("main");
      const myChart = new Charts(container);
      const option1 = {
        title: {
          text: "畅销饮料占比饼状图",
        },
        series: [
          {
            type: "pie",
            data: [
              { name: "可口可乐", value: 93 },
              { name: "百事可乐", value: 32 },
              { name: "哇哈哈", value: 65 },
              { name: "康师傅", value: 44 },
              { name: "统一", value: 52 },
            ],
            insideLabel: {
              show: true,
            },
            tooltip: {
              trigger: "item",
            },
          },
        ],
      };
      myChart.setOption(option1);
    },
  },
};
</script>

<style scoped></style>
