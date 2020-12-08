export default {
    actions:{
        moSadd1(context){
            context.commit("moadd1");
        },
        moSadd2({commit},datas){
            commit("moadd2",datas);
        }
    }
}