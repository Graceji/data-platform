<template>
  <div id="dictionary_table">
    <el-row>
      <el-col :span="6">
        <div class="sidebar" v-if="tableName === 'smdb'">
          <el-collapse accordion v-model="activeNames">
            <el-collapse-item :name="item.name" v-for="item in tables" :key="item.name">
              <template slot="title">
                {{item.name}}
              </template>
              <el-table :data="item.tables" border max-height="550" style="" class="tables_f" stripe>
                <el-table-column prop="date" label="名称" style="width: 100%;" align="center">
                  <template scope="scope">
                    <div  @click="showTable(scope.row.name)">
                      <span >{{scope.row.name}}</span>
                      <span style="font-size: 8px">{{scope.row.chineseName}}</span>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="sidebar" v-else>
          <el-table :data="tables" border max-height="550" class="tables_o" stripe>
            <el-table-column prop="date" label="名称" style="width: 100%" align="center">
              <template scope="scope">
                <div @click="showTable(scope.row.name)">
                  <span>{{scope.row.name}}</span>
                  <span style="font-size: 8px">{{scope.row.chineseName}}</span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="15" :offset="1" v-if="tables">
        <div style="margin-bottom: 10px; text-align: left">
          <span style="font-size: 20px;">数据状态</span>
        </div>
        <el-table :data="tableData" style="width: 100%;" class="mainTable">
          <el-table-column prop="date" label="最后更新日期" width="150"></el-table-column>
          <el-table-column prop="amount" label="数据量(条)" width="150"></el-table-column>
          <el-table-column prop="frequency" label="更新频率"></el-table-column>
          <el-table-column prop="source" label="数据源"></el-table-column>
          <el-table-column prop="maintain" label="维护人"></el-table-column>
        </el-table>
        <div style="margin-bottom: 10px; text-align: left;margin-top: 15px">
          <span style="font-size: 20px;">表结构</span>
        </div>
        <el-table :data="tableContent" style="width: 100%;" :max-height="height" class="amountTable" >
          <el-table-column prop="name" label="字段名称" width="180"></el-table-column>
          <el-table-column prop="chineseName" label="中文名称" min-width="180"></el-table-column>
          <el-table-column prop="type" label="字段类型" min-width="180"></el-table-column>
          <el-table-column prop="isNull" label="是否可为空" width="120"></el-table-column>
          <el-table-column prop="state" label="状态"></el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </div>

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'dic_Tables',
    data () {
      return {
        activeNames: '',
        tableName: this.$route.params.id,
        tableData: [
          {
            date: '2016-05-02',
            amount: 12300,
            frequency: '每月15号',
            source: '无权限',
            maintain: '张阿姨'
          }
        ]
      }
    },
    methods: {
      showTable (tableName) {
        this.$store.dispatch('dictionary/getTableContent', {
          tableUrl: this.tableName,
          tableName
        })
      }
    },
    computed: {
      ...mapGetters({
        user: 'user/user',
        tables: 'dictionary/tables',
        tableContent: 'dictionary/tableContent'
      }),
      height () {
        return window.innerHeight - 300
      }
    },
    mounted () {
      this.$store.dispatch('dictionary/getTables', {
        tableName: this.tableName,
        usergroup: sessionStorage.getItem('usergroup')
      }).catch((e) => {
        this.$notify({
          title: e.status,
          message: e.message
        })
      })
    }
  }
</script>

<style lang="less">
  #dictionary_table {
    width: 100%;
    height: 100%;
    margin-top: 30px;
    .el-row {
      height: 100%;
      .el-col-6 {
        max-height: 100%;
      }
    }
    .sidebar {
      height: 100%;
      margin: 0px 25px;
      .tables_f {
        width: 100%;
        overflow-x: hidden;
        span {
          font-size: 14px;
          line-height: 1.5;
          display: block;
          cursor: pointer;
        }
        .el-table__header-wrapper {
          display: none;
        }
      }
      .tables_o {
        overflow-x: hidden;
        height: 100%;
        span {
          font-size: 14px;
          line-height: 1.5;
          display: block;
          cursor: pointer;
        }
      }
    }
    .mainTable {
      th {
        text-align: center;
      }
    }
    .amountTable {
      th {
        text-align: center;
      }

    }
    .el-collapse-item__wrap {
      .el-collapse-item__content {
        padding: 0;
      }
    }

    .el-table__body-wrapper {
      overflow-x: hidden;
    }
  }
</style>
