import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import moduleState from './moduleState';
import moduleGet from './moduleGet';
import moduleMutations from './moduleMutations';
import moduleActions from './moduleActions';

import {ADD1,ADD2} from "./myType.js";
console.log(typeof ADD1,ADD1);
console.log(typeof [ADD1],[ADD1]);

export default new Vuex.Store({
    state:{
        a:10,
    },
    getters:{
        A(state){
            return state.a;
        }
    },
    mutations:{
        [ADD1](state){          //    注意这种写法   //
            state.a+=1;
        },
        [ADD2](state,datas){//datas自定义的，对应调用这个函数的对象   this.$store.commit( "add2" , {n:10} );
            state.a+=datas.n;
        }
    },
    actions:{
        Sadd1(context){
            context.commit("add1");
        },
        Sadd2({commit},datas){
            commit("add2",datas);
        }
    },
    modules:{
        moduleState,
        moduleGet,
        moduleMutations,
        moduleActions,
    },
})