export default {
    mutations:{
        moadd1(state){
            this.state.moduleState.b+=5;
        },
        moadd2(state,datas){
            this.state.moduleState.count+=datas.nn;
        }
    }
}