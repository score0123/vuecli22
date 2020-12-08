<template>
  <div class="myAplayer">
    <Aplayer
      :music="music1"
      :mini="mini"
      :float="float"
      :showLrc="showLrc"
      :volume="volume"
      :muted="muted"
      :list="list"
      :listFolded="listFolded"
      :controls="controls"
      :repeat="repeat"
    ></Aplayer>
      <button @click="showFun('mini')">迷你</button>
      <button @click="showFun('float')">浮动</button>
      <button @click="showFun('showLrc')">显示歌词</button>
      <button @click="showFun('muted')">静音</button>
      <button @click="showFun('listFolded')">收起播放列表</button>
      <button @click="showFun('controls')">显示原生 audio 元素</button>
      <button @click="repeatButhods">{{repeatArr[n].name}}</button>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
export default {
  name: 'myAplayer',
  data () {
    return {
      music1:{
        src:'/static/mp3/nongmin.mp3',//音频文件的 路径
        title:'NONGMIN',              //歌曲名称
        artist:'小李子',              //演唱者
        pic:'/static/mp3/nongmin.jpg',//封面图片 路径
        theme:'gold',                  //歌曲的主题色，会覆盖播放器的主题色
        lrc:lyric1,                   //歌词
      },
      music2:{
        src:"static/mp3/liulangdiqiu.mp3",
        title:"带着地球去流浪",
        artist:"刘欢",
        pic:"static/mp3/liulangdiqiu.jpg",
      },
      list:[
        {
          src:'/static/mp3/nongmin.mp3',//音频文件的 路径
          title:'NONGMIN',              //歌曲名称
          artist:'小李子',              //演唱者
          pic:'/static/mp3/nongmin.jpg',//封面图片 路径
          theme:'gold',                  //歌曲的主题色，会覆盖播放器的主题色
          lrc:lyric1,                   //歌词
        },{
          src:"static/mp3/liulangdiqiu.mp3",
        title:"带着地球去流浪",
        artist:"刘欢",
        pic:"static/mp3/liulangdiqiu.jpg",
        },{
          src:'/static/mp3/nongmin.mp3',//音频文件的 路径
          title:'NONGMIN',              //歌曲名称
          artist:'小李子',              //演唱者
          pic:'/static/mp3/nongmin.jpg',//封面图片 路径
          theme:'gold',                  //歌曲的主题色，会覆盖播放器的主题色
          lrc:lyric1,                   //歌词
        },{
          src:"static/mp3/liulangdiqiu.mp3",
        title:"带着地球去流浪",
        artist:"刘欢",
        pic:"static/mp3/liulangdiqiu.jpg",
        },{
          src:'/static/mp3/nongmin.mp3',//音频文件的 路径
          title:'NONGMIN',              //歌曲名称
          artist:'小李子',              //演唱者
          pic:'/static/mp3/nongmin.jpg',//封面图片 路径
          theme:'gold',                  //歌曲的主题色，会覆盖播放器的主题色
          lrc:lyric1,                   //歌词
        },{
          src:"static/mp3/liulangdiqiu.mp3",
        title:"带着地球去流浪",
        artist:"刘欢",
        pic:"static/mp3/liulangdiqiu.jpg",
        },
      ],
      mini:false,       //迷你模式
      float:false,      //浮动模式。你可以在页面上随意拖放你的播放器
      showLrc:false,    //是否显示歌词
      muted:false,      //静音
      volume:0.3,       //播放音量  默认0.8   取值为 0 ~ 1
      listFolded:false, //收起播放列表  只有第一次加载时起作用  所以这个值没法改变
      controls:false,   //显示原生 audio 元素（在播放器面板和播放列表面板之间）
      repeat:"no-repeat",
      repeatArr:[
        {arr:'no-repeat',name:'不循环'},
        {arr:'repeat-one',name:'单曲循环'},
        {arr:'repeat-all',name:'多曲循环'},
        {arr:'none',name:'不循环'},
        {arr:'music',name:'单曲循环'},
        {arr:'list',name:'多曲循环'},
      ],
      n:0
    }
  },
  methods:{
    showFun(uuu){
      console.log(uuu);
      // console.log(this[uuu]);
      // console.log(this.mini);
      this[uuu]=!this[uuu]
      console.log(this[uuu]);
    },
    repeatButhods(){
      if(1+this.n==this.repeatArr.length){
        this.n=0;
      }else{
        this.n++;
      }
      this.repeat=repeatArr[n];
    }

  },
  components:{
    Aplayer
  }
}
let lyric1=`
[00:00.02]词：姚若龙↵
[00:20.03]曲：黄家驹↵
[00:40.06]↵
[00:52.21]不看人家一夜盖起高楼↵
[00:58.54]不问苍天偏爱谁多↵
[01:03.62]↵
[01:04.45]用我一片诚心一双手↵
[01:09.93]↵
[01:11.69]换得平安自在生活↵
[01:16.59]↵
[01:17.60]每个人头上一片天↵
[01:20.73]每个人心中一块田↵
[01:24.18]到底是丰收是荒年↵
[01:27.25]问感觉不要看金钱↵
[01:30.58]若是七分醉好梦田↵
[01:33.84]何苦拼命要贪千杯↵
[01:37.27]什么心结成什么缘↵
[01:40.42]一份血汗收一份田↵
[01:43.82]↵
[01:54.37]不信人情早已变得淡薄↵
[02:00.38]↵
[02:00.95]不怕真心待人不保留↵
[02:05.94]↵
[02:07.56]如果关上大门孤独过↵
[02:12.45]↵[02:14.10]长命富贵也难快乐↵
[02:19.10]↵[02:20.03]每个人头上一片天↵
[02:23.11]每个人心中一块田↵
[02:26.63]到底是丰收是荒年↵
[02:29.72]问感觉不要看金钱↵
[02:32.99]若是七分醉好梦田↵
[02:36.25]何苦拼命要贪千杯↵
[02:39.63]什么心结成什么缘↵
[02:42.87]一份血汗收一份田↵
[02:46.34]↵
[02:51.22]一天又一天↵
[02:52.72]努力耕耘不停歇↵
[02:55.86]↵
[02:57.71]希望在心间↵
[02:59.28]不怕辛酸永远向前↵
[03:07.46]↵
[03:09.30]每个人头上一片天↵
[03:12.46]每个人心中一块田↵
[03:15.83]到底是丰收是荒年↵
[03:19.00]问感觉不要看金钱
[03:22.30]若是七分醉好梦田↵
[03:25.60]何苦拼命要贪千杯↵
[03:28.94]什么心结成什么缘↵
[03:32.20]一份血汗收一份田↵
`;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
