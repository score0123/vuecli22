<template>
  <div class="mint1_Button">
    <mt-button type="default" @click="pop1">default</mt-button>
    <mt-button type="primary" @click="fn1">primary</mt-button>
    <mt-button type="danger"  @click="fn2">danger</mt-button>

    <mt-button size="small">small</mt-button>
    <mt-button size="large">large</mt-button>
    <mt-button size="normal">normal</mt-button>

    <mt-button disabled>disabled</mt-button>

    <mt-button plain>plain</mt-button>

    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">more</mt-button>

    <mt-button>
      <img src="static/img/1.jpg" height="20" width="20" slot="icon">
      icon
    </mt-button>
    <mt-button>
      <img src="../../assets/img/3.jpg" height="20" width="20" slot="icon">
      icon
    </mt-button>

    <mt-popup
      v-model="popupVisible"
      position="top">
      登陆成功
    </mt-popup>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { Button,Popup,Toast } from 'mint-ui';

Vue.component(Button.name, Button); //按钮
Vue.component(Popup.name,Popup);    //遮罩
Vue.component(Toast.name,Toast);    //轻提示

export default {
  name: 'mint1_Button',
  data () {
    return {
      popupVisible:false
    }
  },
  methods:{
    pop1(){
      this.popupVisible=true;
      setTimeout(()=>{
        this.popupVisible=false;
      },500)
      console.log(123)
    },

    fn1(){
      // Toast('基本用法');
      Toast({
        message: 'Toast基本用法',
        position: 'top',
        // position: 'bottom',
        // position: 'middle',
        duration: 1000
      });
    },
    fn2(){
      Toast({
        message: '点击弹出带有icon的Toast',
        iconClass: ''
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-popup{
  width: 100%;
  height: 100px;
  text-align: center;
  background: yellow;
}
</style>

<style>/* 这个遮罩层 好像不在全局的给不上 */
.v-modal {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background: transparent;
}
</style>
