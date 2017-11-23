<template>
  <div>
      <div class="center">
          <h2>输出计算</h2>
      </div>
      <mt-field label="威力" placeholder="请输入我方武器威力" type="number" v-model="might"></mt-field>
      <mt-field label="面板伤害" placeholder="请输入我方面板伤害" type="number" v-model="base_harm"></mt-field>
      <mt-field label="真实伤害" placeholder="请输入我方特效真实伤害" type="number" v-model="real_harm"></mt-field>
      <mt-field label="属性增幅" placeholder="请输入我方特效能量增幅" type="number" v-model="amplify"></mt-field>
      <mt-field label="特效触发率" placeholder="请输入我方特效触发率" type="number" v-model="specially_rate"></mt-field>
      <mt-field label="技能冷却" placeholder="请输入我方技能冷却" type="number" v-model="skill_cd"></mt-field>
      <mt-field label="命中率" placeholder="请输入我方命中率" type="number" v-model="hit_rate"></mt-field>
      <mt-field label="暴击率" placeholder="请输入我方暴击率" type="number" v-model="violent_rate"></mt-field>
      <mt-field label="我方技巧" placeholder="请输入我方技巧" type="number" v-model="technique"></mt-field>
      <mt-field label="我方力量" placeholder="请输入我方力量" type="number" v-model="power"></mt-field>
      <mt-field label="我方速度" placeholder="请输入我方速度" type="number" v-model="my_speed"></mt-field>
      <mt-field label="敌方速度" placeholder="请输入敌方速度" type="number" v-model="speed"></mt-field>
      <mt-field label="敌方防御" placeholder="请输入敌方护甲或抗性" type="number" v-model="defense"></mt-field>
      <mt-field label="输出时长" placeholder="请输入攻击时长(秒)" type="number" v-model="interval"></mt-field>
      <div class="center">
          <h3>平均每秒输出：{{hit_s}}</h3>
          <h3>{{interval}}秒输出：{{hit_total}}</h3>
      </div>
  </div>
  
</template>

<script>
export default {
  data(){
      return{
          power:'',
          base_harm:'',
          real_harm:0,
          amplify:1,
          specially_rate:'',
          hit_rate:'',
          violent_rate:'',
          technique:'',
          my_speed:'',
          speed:'',
          might:'',
          interval:'',
          skill_cd:'',
          defense:0
      }
  },
  computed:{
      hit_s(){
          var total_hit_rate = ((parseFloat((this.technique * 30) / (this.speed)) + parseFloat(this.hit_rate)) / 100).toFixed(2);
          if(total_hit_rate > 1){
              total_hit_rate = 1
          }
          console.log("total_hit_rate:" + total_hit_rate)
          var total_violent_rate = (parseFloat(this.violent_rate) + parseFloat(this.technique * 0.05)) / 100;
          console.log("total_violent_rate:" + total_violent_rate)
          var cd = parseFloat(1.5) + parseFloat(this.skill_cd) + parseFloat((this.power / this.my_speed).toFixed(2));
          console.log("cd:" + cd)
          var times =(60 / cd * total_hit_rate).toFixed(2);
          console.log("times:" + times)
          var total_real_harm = times * this.real_harm * this.specially_rate / 100;
          console.log("total_real_harm:" + total_real_harm)
          var violent_times = times * total_violent_rate;
          console.log("violent_times:" + violent_times)
          var specially_violent_times = times * total_violent_rate * this.specially_rate / 100;
          console.log("specially_violent_times:" + specially_violent_times)
          var total_specially_violent_harm = specially_violent_times * (parseFloat((this.base_harm - this.might) * this.amplify) + parseFloat(this.might)) * 1.5
          console.log("total_specially_violent_harm:" + total_specially_violent_harm)
          var total_common_violent_harm = (violent_times - specially_violent_times) * this.base_harm * 1.5;
          console.log("total_common_violent_harm:" + total_common_violent_harm)
          var specially_common_times = (times - violent_times) * this.specially_rate / 100;
          console.log("specially_common_times:" + specially_common_times)
          var total_specially_common_harm = specially_common_times * (parseFloat((this.base_harm - this.might) * this.amplify) + parseFloat(this.might))
          console.log("total_specially_common_harm:" + total_specially_common_harm)
          var total_common_harm = (times - violent_times - specially_common_times) * this.base_harm;
          console.log("total_common_harm:" + total_common_harm)
          
          return ((parseFloat(total_specially_violent_harm) + parseFloat(total_common_violent_harm) + parseFloat(total_specially_common_harm) + parseFloat(total_common_harm)) * (1 - (this.defense/(parseFloat(this.defense) + parseFloat(50)))) / 60 ).toFixed(2)
      },
      hit_total(){
          return this.hit_s * this.interval
      }
  }
}
</script>

<style scoped>
.center{
    text-align: center
}
</style>

