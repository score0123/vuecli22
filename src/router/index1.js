import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// let login= ()=> import('@/components/login/login')
let login= resolve =>require(['@/components/login/login'],resolve)

let myElementUI= ()=> import('@/components/myElementUI/myElementUI')
let ele1_InputNumber= ()=> import('@/components/myElementUI/ele1_InputNumber')
let ele2_Input= ()=> import('@/components/myElementUI/ele2_Input')
let ele3_Layout= ()=> import('@/components/myElementUI/ele3_Layout')
let ele4_Slider= ()=> import('@/components/myElementUI/ele4_Slider')
let ele5_DataPicker= ()=> import('@/components/myElementUI/ele5_DataPicker')
let ele6_Rate= ()=> import('@/components/myElementUI/ele6_Rate')
let ele7_Breadcrumb= ()=> import('@/components/myElementUI/ele7_Breadcrumb')
let ele8_Carousel= ()=> import('@/components/myElementUI/ele8_Carousel')

let myVantUI= ()=> import('@/components/myVantUI/myVantUI')
let vant1_Button= ()=> import('@/components/myVantUI/vant1_Button')
let vant2_Toast= ()=> import('@/components/myVantUI/vant2_Toast')
let vant3_Popup= ()=> import('@/components/myVantUI/vant3_Popup')
let vant4_Slider= ()=> import('@/components/myVantUI/vant4_Slider')
let vant5_Uploader= ()=> import('@/components/myVantUI/vant5_Uploader')
let vant6_PullRefresh= ()=> import('@/components/myVantUI/vant6_PullRefresh')
let vant7_CountDown= ()=> import('@/components/myVantUI/vant7_CountDown')
let vant8_Circle= ()=> import('@/components/myVantUI/vant8_Circle')
let vant9_Image= ()=> import('@/components/myVantUI/vant9_Image')
let vant10_Swipe= ()=> import('@/components/myVantUI/vant10_Swipe')

let myMintUI= ()=> import('@/components/myMintUI/myMintUI')
let mint1_Button_Popup= ()=> import('@/components/myMintUI/mint1_Button_Popup')
let mint2_Swipe= ()=> import('@/components/myMintUI/mint2_Swipe')

let Audio= ()=> import('@/components/myAplayer/Audio')
let myAplayer= ()=> import('@/components/myAplayer/myAplayer')
let myvideoplayer= ()=> import('@/components/myAplayer/myvideoplayer')

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
