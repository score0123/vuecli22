<template>
  <div class="myBetterScrollDemo7">
    <div class="box" ref="box">
      <div class="boxLift" ref="boxLift">
        <div v-for="(item,i) in datas" :key="i" ref="liftHeights">
          <div class="Liftbiaoti">{{item.name}}</div>
          <div v-for="(item2,i2) in item.cities" :key="i2">
            <div class="Liftshi">{{item2.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="Right">
      <div v-for="(item,i) in datas" :key="i" :class="{active:i===currentIndex}" @click="mySelect(i,$event)">
        {{item.name|mySub}}
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import ListData from './data/addressList.json';

import BScroll from 'better-scroll';

export default {
  name: 'myBetterScrollDemo7',
  data () {
    return {
      datas:ListData,
      n:0,
      heightS:[],
      ScrollY:0,
    }
  },
  filters:{
    mySub(value){             //    没太大用
      return value.substr(0,1)//作用：使右侧数据 ★热门城市 只显示 ★
    }
  },
  methods:{
    //滚动效果
    InIt(){
      let box=this.$refs.box;
      // let boxScroll=new BScroll(box,{
      //   startY:true,
      //   probeType:3
      // })
      // boxScroll.on('scroll',(pos)=>{
      //   // console.log(pos);
      //   this.ScrollY=pos.y;
      // })
      this.boxScroll=new BScroll(box,{//绑定为this上，便于在mySelect点击事件上 操作
        startY:true,
        probeType:3
      })
      this.boxScroll.on('scroll',(pos)=>{//绑定为this上，便于在mySelect点击事件上 操作
        // console.log(pos);
        // this.ScrollY=pos.y;
        this.ScrollY=Math.abs(Math.round(pos.y))//Math.abs绝对值   Math.round四舍五入
      })
    },
    //获取左侧每个块到顶部的高度(A的高度，B的高度...)
    getHeights(){
      let hs=this.$refs.liftHeights;//左侧代码块的数组[A:{},B:{},C:{},...]
      let h=0;
      this.heightS.push(h);
      for(let i=0;i<hs.length;i++){
        // console.log(hs[i].clientHeight);
        h+=hs[i].clientHeight;
        this.heightS.push(h);//把高度存到 heightS 数组中
      }
      // console.log(this.heightS);
    },
    mySelect(i,event){
      // this.n=i;
      let hs=this.$refs.liftHeights;//左侧代码块的数组[A:{},B:{},C:{},...]
      let el=hs[i];                 //右侧被点击选中的元素，所对应左侧的块<div>热门城市...</div>
      // console.log(el);
      // new betterscroll.scrollToElement(el, time, offsetX, offsetY, easing)
      //                       作用：滚动到指定的目标元素。
      //                          el 滚动到的目标元素
      this.boxScroll.scrollToElement(el,1000);
    }
  },
  computed:{
    currentIndex(){
      console.log(this.heightS);
      for(let i=0,len=this.heightS.length ; i<len ; i++){
        // let h1=heightS[i];
        // let h2=heightS[i+1];
        // console.log(h1)
        // console.log(h2)
        // if(!h2){
        //   return i;
        // }
        let h1=this.heightS[i];
        let h2=this.heightS[i+1];
        // console.log("此时:i",i,"h1:",h1,"h2:",h2);
        console.log("此时:i",i,"h1:",h1,"h2:",h2,"ScrollY",this.ScrollY);
        //这段for循环本来是不会在滚动时触发的，但是这段代码有了this.ScrollY（左侧的高度），每次滑动都会重新渲染this.ScrollY的数据
        //                      而this.ScrollY是在for循环里边    所以这段代码就会连续的被执行
        // if(!h2||(this.ScrollY>=h1&&this.ScrollY<h2)){
        //   return i;
        // }
      //   console.log("此时h1:"+h1+",h2为:"+h2);
        if((this.ScrollY>=h1&&this.ScrollY<h2)){
          console.log(h2);
          console.log(!h2);
          return i;
        }
      }
      return 0;
    }
  },
  mounted(){
    console.log(this.datas);
    this.InIt();//滚动效果
    this.$nextTick(()=>{
      this.getHeights();//获取左侧每个块到顶部的高度(A的高度，B的高度...)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active{
  background: red;
  border-radius: 50%;
}

.box{
  height: 475px;
  overflow: hidden;
}
.boxLift{
  height: 1300px;
}
.Liftbiaoti{
  background: #aba9a9;
}
.Liftshi{
  margin: 10px;
  font-size: 14px;
}

.Right{
  position: fixed;
  top: 40%;
  right: 30px;
}
.Right>div{
  width: 35px;
  height: 35px;
  line-height: 2;
  text-align: center;
}
</style>