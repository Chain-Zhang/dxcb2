<template>
  <div>
    <div class="center">
      <h2>闪避计算</h2>
    </div>
    
    <mt-field label="敌方技巧" placeholder="请输入敌方技巧" type="number" v-model="technique"></mt-field>
    <mt-field label="敌方命中率" placeholder="请输入敌方命中率" type="number" v-model="hit_rate"></mt-field>
    <mt-field label="我方速度" placeholder="请输入我方速度" type="number" v-model="speed"></mt-field>
    <mt-field label="我方闪避率" placeholder="请输入我方命中率" type="number" v-model="jink_rate"></mt-field>
    <div class="center">
      <h3>
        最终我方闪避：{{result}}%
      </h3>
    </div>
    
  </div>  
</template>

<script>
export default {
  data(){
      return{
          technique:'',
          hit_rate:'',
          speed:'',
          jink_rate:'',
          
      }
  },
  computed:{
      result:function(){
          return 100 - (parseFloat((this.technique * 30) / (this.speed)  - this.jink_rate) + parseFloat(this.hit_rate)).toFixed(2)
      }
  }
}
</script>

<style scoped>
.center{
    text-align: center
}
</style>

