import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import login from '@/components/login/login'

import myElementUI from '@/components/myElementUI/myElementUI'
import ele1_InputNumber from '@/components/myElementUI/ele1_InputNumber'
import ele2_Input from '@/components/myElementUI/ele2_Input'
import ele3_Layout from '@/components/myElementUI/ele3_Layout'
import ele4_Slider from '@/components/myElementUI/ele4_Slider'
import ele5_DataPicker from '@/components/myElementUI/ele5_DataPicker'
import ele6_Rate from '@/components/myElementUI/ele6_Rate'
import ele7_Breadcrumb from '@/components/myElementUI/ele7_Breadcrumb'
import ele8_Carousel from '@/components/myElementUI/ele8_Carousel'

import myVantUI from '@/components/myVantUI/myVantUI'
import vant1_Button from '@/components/myVantUI/vant1_Button'
import vant2_Toast from '@/components/myVantUI/vant2_Toast'
import vant3_Popup from '@/components/myVantUI/vant3_Popup'
import vant4_Slider from '@/components/myVantUI/vant4_Slider'
import vant5_Uploader from '@/components/myVantUI/vant5_Uploader'
import vant6_PullRefresh from '@/components/myVantUI/vant6_PullRefresh'
import vant7_CountDown from '@/components/myVantUI/vant7_CountDown'
import vant8_Circle from '@/components/myVantUI/vant8_Circle'
import vant9_Image from '@/components/myVantUI/vant9_Image'
import vant10_Swipe from '@/components/myVantUI/vant10_Swipe'

import myMintUI from '@/components/myMintUI/myMintUI'
import mint1_Button_Popup from '@/components/myMintUI/mint1_Button_Popup'
import mint2_Swipe from '@/components/myMintUI/mint2_Swipe'

import Audio from '@/components/myAplayer/Audio'
import myAplayer from '@/components/myAplayer/myAplayer'
import myvideoplayer from '@/components/myAplayer/myvideoplayer'


// import myAsyncCom1 from './myAsyncCom1' //加载组件方式1,步骤1
// let myAsyncCom3= ()=> import('./myAsyncCom3')//异步加载组件 加载组件方式2
// let myAsyncCom5= resolve =>require(['./myAsyncCom5'],resolve)//异步加载组件 加载组件方式3


Vue.use(Router)

export default new Router({
    routes: [
        {path:"/",redirect:"/login"},
        {path:"/login",name:"login",component:login},
        {path:"/myElementUI",name:"myElementUI",component:myElementUI,
            children:[
                {path:"/myElementUI/ele1_InputNumber",name:"ele1_InputNumber",component:ele1_InputNumber},
                {path:"/myElementUI/ele2_Input",name:"ele2_Input",component:ele2_Input},
                {path:"/myElementUI/ele3_Layout",name:"ele3_Layout",component:ele3_Layout},
                {path:"/myElementUI/ele4_Slider",name:"ele4_Slider",component:ele4_Slider},
                {path:"/myElementUI/ele5_DataPicker",name:"ele5_DataPicker",component:ele5_DataPicker},
                {path:"/myElementUI/ele6_Rate",name:"ele6_Rate",component:ele6_Rate},
                {path:"/myElementUI/ele7_Breadcrumb",name:"ele7_Breadcrumb",component:ele7_Breadcrumb},
                {path:"/myElementUI/ele8_Carousel",name:"ele8_Carousel",component:ele8_Carousel},
            ]
        },
        {path:"/myVantUI",name:"myVantUI",component:myVantUI,
            children:[
                {path:"/myVantUI/vant1_Button",name:"vant1_Button",component:vant1_Button},
                {path:"/myVantUI/vant2_Toast",name:"vant2_Toast",component:vant2_Toast},
                {path:"/myVantUI/vant3_Popup",name:"vant3_Popup",component:vant3_Popup},
                {path:"/myVantUI/vant4_Slider",name:"vant4_Slider",component:vant4_Slider},
                {path:"/myVantUI/vant5_Uploader",name:"vant5_Uploader",component:vant5_Uploader},
                {path:"/myVantUI/vant6_PullRefresh",name:"vant6_PullRefresh",component:vant6_PullRefresh},
                {path:"/myVantUI/vant7_CountDown",name:"vant7_CountDown",component:vant7_CountDown},
                {path:"/myVantUI/vant8_Circle",name:"vant8_",component:vant8_Circle},
                {path:"/myVantUI/vant9_Image",name:"vant9_",component:vant9_Image},
                {path:"/myVantUI/vant10_Swipe",name:"vant10_Swipe",component:vant10_Swipe},
            ]
        },
        {path:"/myMintUI",name:"myMintUI",component:myMintUI,
            children:[
                {path:"/myMintUI/mint1_Button_Popup",name:"mint1_Button_Popup",component:mint1_Button_Popup},
                {path:"/myMintUI/mint2_Swipe",name:"mint2_Swipe",component:mint2_Swipe},
            ]

        },
        {path:"/Audio",name:"Audio",component:Audio,
            children:[
                {path:"/Audio/myAplayer",name:"myAplayer",component:myAplayer},
                {path:"/Audio/myvideoplayer",name:"myvideoplayer",component:myvideoplayer},
            ]
        }
        // {
        //     path: '/hello',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // }
    ]
})
