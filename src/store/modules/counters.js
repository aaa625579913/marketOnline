const counters = {
    namespaced:true,
    state: {
        num: 0
    },


    getters: {
        tenTimesNum(state){
            return state.num * 10
        }
    },
    mutations:{
        addNum(state){
          state.num += 1
        }
    },

    actions:{
        asynAddNum({commit}){
            setTimeout(()=>{
                commit('addNum')
            },1000)
        }
    }

}

export default counters