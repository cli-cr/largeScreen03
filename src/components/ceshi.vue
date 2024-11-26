<template>
  <div id="app">
    <el-table :data="expandedTableData" border style="width: 100%" :span-method="objectSpanMethod" :header-cell-class-name="tableHeaderClassName">
      <!-- 原有的列结构 -->
      <el-table-column prop="areaName" label="辖区" width="180" align="center"></el-table-column>
      <el-table-column prop="areaCrossCount" label="辖区路口合计" width="150" align="center"></el-table-column>
      <el-table-column prop="areaOptimizationCount" label="辖区优化次数合计" width="180" align="center"></el-table-column>
      <el-table-column prop="crossName" label="路口" width="150" align="center"></el-table-column>
      <el-table-column prop="operationContent" label="操作内容" width="150" align="center"></el-table-column>
      <el-table-column prop="userName" label="操作人" width="150" align="center"></el-table-column>
      <el-table-column prop="operTime" label="操作时间" width="150" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rawTableData: [
        { areaName: '辖区1', crossName: '路口1', operationContent: '方案下发', userName: '李四', operTime: '2024/10/1 15:32' },
        { areaName: '辖区1', crossName: '路口1', operationContent: '方案下发', userName: '李四', operTime: '2024/10/1 15:37' },
        { areaName: '辖区1', crossName: '路口2', operationContent: '方案下发', userName: '王二', operTime: '2024/10/1 15:39' },
        { areaName: '辖区2', crossName: '路口2', operationContent: '方案下发', userName: '李四', operTime: '2024/10/1 16:00' },
        { areaName: '辖区2', crossName: '路口3', operationContent: '方案下发', userName: '张三', operTime: '2024/10/1 16:05' }
      ],
      expandedTableData: []
    };
  },
  computed: {
    totalOptimization() {
      return this.expandedTableData.reduce((acc, cur) => acc + (cur.areaOptimizationCount || 0), 0);
    },
    totalIntersections() {
      return this.expandedTableData.reduce((acc, cur) => acc + (cur.areaCrossCount || 0), 0);
    }
  },
  created() {
    this.expandedTableData = this.expandData(this.rawTableData);
  },
  methods: {
    expandData(data) {
      const result = [];
      const areaMap = new Map();
      const mergedRecords = new Map();

      data.forEach((item) => {
        const areaKey = item.areaName;
        const crossKey = item.crossName;
        const key = `${item.areaName}-${item.crossName}-${item.operationContent}-${item.userName}`;

        if (!areaMap.has(areaKey)) {
          areaMap.set(areaKey, {
            areaName: item.areaName,
            crosses: new Set(),
            optimizationCount: 0
          });
        }

        const areaData = areaMap.get(areaKey);
        areaData.crosses.add(crossKey);
        areaData.optimizationCount++;

        if (!mergedRecords.has(key)) {
          mergedRecords.set(key, {
            ...item,
            operTimes: [item.operTime],
            areaCrossCount: 0,
            areaOptimizationCount: 0
          });
        } else {
          const existingRecord = mergedRecords.get(key);
          existingRecord.operTimes.push(item.operTime);
        }
      });

      mergedRecords.forEach((record) => {
        record.areaCrossCount = areaMap.get(record.areaName).crosses.size;
        record.areaOptimizationCount = areaMap.get(record.areaName).optimizationCount;
        record.operTimes.forEach(time => {
          result.push({
            ...record,
            operTime: time
          });
        });
      });

      return result;
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      const data = this.expandedTableData;

      if (columnIndex === 0) { // 合并“辖区”列
        const rows = data.filter(r => r.areaName === row.areaName);
        const rowspan = rows.length;

        if (rowIndex === 0 || (rowIndex > 0 && rows[0].areaName !== data[rowIndex - 1].areaName)) {
          return { rowspan, colspan: 1 };
        } else {
          return { rowspan: 0, colspan: 0 };
        }
      }

      if (columnIndex === 1 || columnIndex === 2) { // 合并“辖区路口合计”和“辖区优化次数合计”列
        const rows = data.filter(r => r.areaName === row.areaName);
        const rowspan = rows.length;

        if (rowIndex === 0 || (rowIndex > 0 && rows[0].areaName !== data[rowIndex - 1].areaName)) {
          return { rowspan, colspan: 1 };
        } else {
          return { rowspan: 0, colspan: 0 };
        }
      }

      if (columnIndex >= 3 && columnIndex <= 5) { // 合并“路口”、“操作内容”和“操作人”列
        const key = `${row.areaName}-${row.crossName}-${row.operationContent}-${row.userName}`;
        const rows = data.filter(r => r.areaName === row.areaName && r.crossName === row.crossName && r.operationContent === row.operationContent && r.userName === row.userName);
        const rowspan = rows.length;

        if (rowIndex === 0 || (rowIndex > 0 && rows[0].areaName !== data[rowIndex - 1].areaName || rows[0].crossName !== data[rowIndex - 1].crossName || rows[0].operationContent !== data[rowIndex - 1].operationContent || rows[0].userName !== data[rowIndex - 1].userName)) {
          return { rowspan, colspan: 1 };
        } else {
          return { rowspan: 0, colspan: 0 };
        }
      }
    },
    tableHeaderClassName({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'custom-header';
      }
      return '';
    }
  }
};
</script>

<style scoped>
/* 你可以在这里添加一些样式 */
</style>