<template>
  <div class="myBetterScrollDemo6">
    <div class="box">
      <div class="boxLeft" ref="boxLeft">
        <div class="Left">
          <div class="goodsMenu" ref="goodsMenu" v-for="(item,i) in goods" :key="i" :class="{'active':i===currentIndex}" @click="mySelect(i,$event)">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="boxRight" ref="boxRight">
        <div class="Right">
          <div v-for="(item,i) in goods" :key="i" ref="goodsType">
            <div class="RightName">{{item.name}}</div>
            <div class="RightData" v-for="(item2,i2) in item.foods" :key="i2">
              <div class="RightImg">
                <img :src="item2.icon" alt="">
              </div>
              <div class="RightDatas">
                <div>{{item2.name}}</div>
                <div class="xianzhou">{{item2.description}}</div>
                <div>月售{{item2.sellCount}}份</div>
                <div>好评率{{item2.rating}}%</div>
                <div>¥{{item2.price}}</div>
                <div><button>+</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BETTERScroll from 'better-scroll'
// import axios from 'axios'
// import addressList from './data/goodsList.json'
// console.log(addressList)

export default {
  name: 'myBetterScrollDemo6',
  data () {
    return {
      goods:"",
      scrollY:0,
      h:0,
      listH:[],//存放右侧(每个区域底部到最顶部的)高度
      // goods:addressList.goods,
    }
  },
  created() {
    this.getData();
    this.$nextTick(()=>{
      // this.initBS();
    })
  },
  mounted() {
    this.InIt();
  },
  // updated(){
  //   this.getHeight();
  // },
  computed:{
    currentIndex(){
      for(let i=0,len=this.listH.length;i<len;i++){
        let h1=this.listH[i];
        let h2=this.listH[i+1];
        // if(!h2 || (this.scrollY)>=h1&&this.scrollY<h2){
        //   return i;
        // }
        if(!h2||(this.scrollY>=h1&&this.scrollY<h2)){
          let goodsMenu = this.$refs.goodsMenu;//左侧的所有选项块
          //console.log("goodsMenu:",goodsMenu);
          let el;
          if(i>=len/2){
            el=goodsMenu[parseInt(len/2)]//parseInt(len/2) 为 9/2  值为 4 
            // console.log("el",el)
            // console.log("goodsMenu",goodsMenu)
            // console.log("goodsMenu[parseInt(len/2)]",goodsMenu[parseInt(len/2)])
          }else{
            el=goodsMenu[0]
          }
          this.boxL.scrollToElement(el,300);
          return i;
        }
      }
      return 0;
    },
  },
  methods:{
    //  点击左侧 被选中样式
    mySelect(i,event){
      this.n=i;
      let goodsType=this.$refs.goodsType;
      let el=goodsType[i];
      // scrollToElement(el, time, offsetX, offsetY, easing)
      //                       作用：滚动到指定的目标元素。
      //                          el 滚动到的目标元素
      this.boxR.scrollToElement(el,300);
    },
    //axios获取数据
    getData(){
      this.axios.get("./static/goodsList.json")
      .then(res=>{
        console.log(res.data.goods);
        this.goods=res.data.goods;
        this.$nextTick(()=>{
          this.getHeight();
        })
      }).catch(err=>{
        console.log("err:",err);
      })
    },
    //  获取高度
    getHeight(){
      // console.log("888:",this.$refs);
      let goodsType=this.$refs.goodsType;
      // console.log("goodsType:",goodsType);
      let h=0;
      this.listH.push(h);
      for(let i=0;i<goodsType.length;i++){
        h+=goodsType[i].clientHeight;
        this.listH.push(h);
        // console.log("我是第"+(i+1)+"自身高度"+goodsType[i].clientHeight+"的高度"+h);
      }
    },
    //  设置better-scroll
    InIt(){
      let boxLeft=this.$refs.boxLeft;
      let boxRight=this.$refs.boxRight;

      this.boxL=new BETTERScroll(boxLeft,{
        click:true,
        scrollY:true,
      })
      this.boxR=new BETTERScroll(boxRight,{
        click:true,
        scrollY:true,
        probeType:3
      })

      this.boxR.on("scroll",pos=>{
        // console.log("滚动了：",pos);
        this.scrollY=Math.abs(Math.round(pos.y));
      })
      // console.log(boxLeft,boxRight);
      // console.log("boxL:",boxL,"boxR:",boxR);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  height: 450px;
  display: flex;
  overflow:hidden;
}
.boxLeft{
  width: 30%;
}
.goodsMenu{
  height:40px;
  padding: 15px 5px;
  font-size: 12px;
  text-align: center;
}
.active{
  font-size: 14px;
  color: white;
  background: red;
}



.boxRight{
  width: 70%;
}
.RightName{
  padding: 3px 0;
  background: gray;
  font-size: 14px;
}
.RightData{
  margin: 10px 0;
  display: flex;
}

.RightImg{
  margin: 0 10px;
}
.RightImg img{
  width: 50px;
  height: 50px;
}
.xianzhou{
  font-size: 12px;
}
.RightDatas>div:nth-of-type(3),.RightData>div:nth-of-type(4){
  font-size: 12px;
}
.RightDatas>div:nth-of-type(5){
  font-size: 15px;
  color: red;
}
</style>