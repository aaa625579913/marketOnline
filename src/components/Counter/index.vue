<template>
    <div>
        <h1>Counter组件</h1>
        <button @click="changeValue(-1)">-1</button>
        <span>{{currentVal}}</span>
        <button @click="changeValue(+1)">+1</button>
    </div>
</template>

<script>
export default {
  props: {
    value:Number
  },
  data(){
      return{
          currentVal:this.value
      }
  },
  methods:{
      changeVal(num){
          this.currentVal +=parseInt(num);
          this.$emit("input",this.currentVal)
      }
  }
};
</script>

<style scoped>
</style>
