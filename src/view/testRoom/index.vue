<template>
  <div>
    <h1>现在的数字是：{{num}}</h1>
    <h1>现在的数字是：{{tenTimesNum}}</h1>
    <button @click="addNum">增加</button>
    <button @click="asynAddNum">异步增加</button>
    <div>
    <input v-model="value"/>
    <div>{{value}}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
// import Counter from "../../components/Counter/index";
export default {
  data() {
    return {
      changedName: "",
      value:''
    };
  },
  components: {
    // Counter
  },
  computed: {
    ...mapState("counters", ["num"]),
    ...mapGetters("counters", ["tenTimesNum"])
  },
  methods: {
    ...mapMutations("counters", ["addNum"]),
    ...mapActions("counters", ["asynAddNum"]),

  }
};
</script>


<style scoped>
h1 {
  padding: 5px 0;
}
</style>

