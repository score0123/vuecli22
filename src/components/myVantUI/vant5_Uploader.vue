<template>
  <div class="vant5_Uploader">
    <h1>{{ msg }}</h1>
    <van-uploader :after-read="afterRead" />
    <img :src="a" alt="">

    文件预览
    通过 v-model 可以绑定已经上传的文件列表，并展示文件列表的预览图。
    <van-uploader v-model="fileList" multiple />

    上传状态
    通过 status 属性可以标识上传状态，uploading 表示上传中，failed 表示上传失败，done 表示上传完成。
    <van-uploader v-model="fileList2" :after-read="afterRead2" />

    自定义上传样式
    通过默认插槽可以自定义上传区域的样式。
    <van-uploader>
      <van-button icon="plus" type="primary">上传文件</van-button>
    </van-uploader>
  </div>
</template>

<script>
import imgs1 from "../../assets/img/1.jpg"
import imgs2 from "../../assets/img/2.jpg"
import imgs3 from "../../assets/img/3.jpg"
import imgs4 from "../../assets/img/4.jpg"
// console.log(imgs1)

export default {
  name: 'vant5_Uploader',
  data () {
    return {
      msg: 'vant5_Uploader',
      a:"",

      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        { url: 'https://cloud-image', isImage: true },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      fileList2: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },
      ],
    }
  },
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(file.content);
      this.a=file.content;
    },
    afterRead2(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
