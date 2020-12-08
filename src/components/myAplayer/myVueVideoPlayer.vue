<template>
  <div class="myVueVideoPlayer">
    <div></div>
    <div>
      <videoPlayer 
        class="videoPlayer"
        ref="videoPlayer"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"

      ></videoPlayer>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
let {log} = console
export default {
  name: 'myVueVideoPlayer',
  data () {
    return {
      playerOptions:{                           //选项
        muted:false,                              //静音
        language: 'zh-CN',//'en',                 //语言
        playbackRates: [0.1,0.5, 1.0, 1.5, 2.0],  //播放速率
        sources:[{                                //来源
          type:"video/mp4",                           //类型
          src:"static/mp4/SVID.mp4"                   //文件路径
        }],
        poster:"static/mp4/kky.png",              //海报(视频的显示图片外观)
        controlBar:{                              //控制条
          remainingTimeDisplay:true,//显示剩余时间
        }
      }
    }
  },
  components:{
    videoPlayer
  },
  methods: {
    onPlayerPlay(player){
      log('播放',player)
    },
    onPlayerPause(player){
      log('暂停',player)
    },
    onPlayerEnded(player){
      log('结束',player)
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
   computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.video-player.videoPlayer>div{
  width: 640px !important;
  height: 480px !important;
}
</style>
