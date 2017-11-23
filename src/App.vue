<template>
  <div id="app">
    <mt-header  fixed title="地下城堡2助手">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right" @click="showSheet"></mt-button>
    </mt-header>

    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      sheetVisible:false,
      actions:[
        {
          name:'闪避计算',
          method:this.gotoJink
        },
        {
          name:'输出计算',
          method:this.gotoHarm
        }
      ]
    }
  },
  methods:{
    showSheet(){
      this.sheetVisible = true
    },
    gotoJink(){
      this.$router.push({path:'/jink'})
    },
    gotoHarm(){
      this.$router.push({path:'/harm'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body
{
 margin: 0px;
}
</style>
