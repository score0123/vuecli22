export default {
    getters:{
        getB(state, getters, rootState, rootGetters){
            console.log("1state:",state)
            console.log("2getters:",getters)
            console.log("3rootState:",rootState)
            console.log("4rootGetters:",rootGetters)
            return rootState.moduleState.b;
        },
        getCount(state, getters, rootState, rootGetters){
            // console.log("1state:",state)
            // console.log("2getters:",getters)
            // console.log("3rootState:",rootState)
            // console.log("4rootGetters:",rootGetters)
            return rootState.moduleState.count;
        }
    }
}