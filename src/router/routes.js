import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'lac',
    linkExactActiveClass: 'leac',
    routes: [
        {path:"/",meta:{isLogin:false},redirect:"/login"},
        {path:"/login",name:"login",meta:{isLogin:false,name:"登录页"},component:()=>import('@/components/login/login')},
        {path:"/myElementUI",name:"myElementUI",meta:{isLogin:true,name:"element-ui"},component:()=>import('@/components/myElementUI/myElementUI'),
            children:[
                {path:"ele1_InputNumber",name:"ele1_InputNumber",component:()=>import('@/components/myElementUI/ele1_InputNumber')},
                {path:"ele2_Input",name:"ele2_Input",component:()=>import('@/components/myElementUI/ele2_Input')},
                {path:"ele3_Layout",name:"ele3_Layout",component:()=>import('@/components/myElementUI/ele3_Layout')},
                {path:"ele4_Slider",name:"ele4_Slider",component:()=>import('@/components/myElementUI/ele4_Slider')},
                {path:"ele5_DataPicker",name:"ele5_DataPicker",component:()=>import('@/components/myElementUI/ele5_DataPicker')},
                {path:"ele6_Rate",name:"ele6_Rate",component:()=>import('@/components/myElementUI/ele6_Rate')},
                {path:"ele7_Breadcrumb",name:"ele7_Breadcrumb",component:()=>import('@/components/myElementUI/ele7_Breadcrumb')},
                {path:"ele8_Carousel",name:"ele8_Carousel",component:()=>import('@/components/myElementUI/ele8_Carousel')},
            ]
        },
        {path:"/myVantUI",name:"myVantUI",meta:{isLogin:true,name:"vant-ui"},component:()=>import('@/components/myVantUI/myVantUI'),
            children:[
                {path:"vant1_Button",name:"vant1_Button",component:()=>import('@/components/myVantUI/vant1_Button')},
                {path:"vant2_Toast",name:"vant2_Toast",component:()=>import('@/components/myVantUI/vant2_Toast')},
                {path:"vant3_Popup",name:"vant3_Popup",component:()=>import('@/components/myVantUI/vant3_Popup')},
                {path:"vant4_Slider",name:"vant4_Slider",component:()=>import('@/components/myVantUI/vant4_Slider')},
                {path:"vant5_Uploader",name:"vant5_Uploader",component:()=>import('@/components/myVantUI/vant5_Uploader')},
                {path:"vant6_PullRefresh",name:"vant6_PullRefresh",component:()=>import('@/components/myVantUI/vant6_PullRefresh')},
                {path:"vant7_CountDown",name:"vant7_CountDown",component:()=>import('@/components/myVantUI/vant7_CountDown')},
                {path:"vant8_Circle",name:"vant8_",component:()=>import('@/components/myVantUI/vant8_Circle')},
                {path:"vant9_Image",name:"vant9_",component:()=>import('@/components/myVantUI/vant9_Image')},
                {path:"vant10_Swipe",name:"vant10_Swipe",component:()=>import('@/components/myVantUI/vant10_Swipe')},
            ]
        },
        {path:"/myMintUI",name:"myMintUI",meta:{isLogin:true,name:"mint-ui"},component:()=>import('@/components/myMintUI/myMintUI'),
            children:[
                {path:"mint1_Button_Popup",name:"mint1_Button_Popup",component:()=>import('@/components/myMintUI/mint1_Button_Popup')},
                {path:"mint2_Swipe",name:"mint2_Swipe",component:()=>import('@/components/myMintUI/mint2_Swipe')},
            ]
        },
        {path:"/Audio",name:"Audio",meta:{isLogin:true,name:"音频"},component:()=>import('@/components/myAplayer/Audio'),
            children:[
                {path:"myAplayer",name:"myAplayer",component:()=>import('@/components/myAplayer/myAplayer')},
                {path:"myVueVideoPlayer",name:"myVueVideoPlayer",component:()=>import('@/components/myAplayer/myVueVideoPlayer')},
            ]
        },
        {path:"/myBetterScroll",name:"myBetterScroll",meta:{isLogin:true,name:"betterscroll"},component:()=>import('@/components/myBetterScroll/myBetterScroll'),
            children:[
                {path:"myBetterScrollDemo1",name:"myBetterScrollDemo1",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo1')},
                {path:"myBetterScrollDemo2",name:"myBetterScrollDemo2",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo2')},
                {path:"myBetterScrollDemo3",name:"myBetterScrollDemo3",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo3')},
                {path:"myBetterScrollDemo4",name:"myBetterScrollDemo4",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo4')},
                {path:"myBetterScrollDemo5",name:"myBetterScrollDemo5",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo5')},
                {path:"myBetterScrollDemo6",name:"myBetterScrollDemo6",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo6')},
                {path:"myBetterScrollDemo7",name:"myBetterScrollDemo7",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo7')},
                {path:"myBetterScrollDemo8",name:"myBetterScrollDemo8",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo8')},
                {path:"myBetterScrollDemo9GoodsList",name:"myBetterScrollDemo9GoodsList",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo9GoodsList')},
                {path:"myBetterScrollDemo10AddressList",name:"myBetterScrollDemo10AddressList",component:()=>import('@/components/myBetterScroll/myBetterScrollDemo10AddressList')},
            ]
        },
        {path:"/myAsync",name:'myAsync',meta:{isLogin:false,name:"异步组件"},component:()=>import("@/components/myAsync/myAsync"),
            children:[
                {path:"myAsyncComponent",name:"myAsyncComponent",component:()=>import("@/components/myAsync/myAsyncComponent")},
                {path:"myAsyncComponent1",name:"myAsyncComponent1",component:()=>import("@/components/myAsync/myAsyncComponent1")},
                {path:"myAsyncComponent2",name:"myAsyncComponent2",component:()=>import("@/components/myAsync/myAsyncComponent2")},
                {path:"myAsyncComponent3",name:"myAsyncComponent3",component:()=>import("@/components/myAsync/myAsyncComponent3")},
                {path:"myAsyncComponent4",name:"myAsyncComponent4",component:()=>import("@/components/myAsync/myAsyncComponent4")},
                {path:"myAsyncComponent5",name:"myAsyncComponent5",component:()=>import("@/components/myAsync/myAsyncComponent5")},
            ]
        },
        {path:"/myImage",name:"myImage",meta:{isLogin:false,name:"图片获取方式"},component:()=>import("@/components/myImage/myImage")},
        {path:"/myrouters",name:"myrouters",meta:{isLogin:false,name:"路由传值"},component:()=>import("@/components/routers/myrouters"),
            children:[
                {path:"myRouter1/user/:user/sex/:sex/age/:age",name:"myRouter1",component:()=>import("@/components/routers/myRouter1")},
                {path:"myRouter2",name:"myRouter2",meta:{"sss":"123"},component:()=>import("@/components/routers/myRouter2")},
                
                {path:"myRouter3Props_router1/:user/:age/:sex",name:"myRouter3Props_router1",component:()=>import("@/components/routers/myRouter3Props_router1"),
                    props:true
                },
                {path:"myRouter3Props_router2",name:"myRouter3Props_router2",component:()=>import("@/components/routers/myRouter3Props_router2"),
                    props:{"suibian":"随便","jingtai":"静态数据"}
                },
                {path:"myRouter3Props_router3",name:"myRouter3Props_router3",component:()=>import("@/components/routers/myRouter3Props_router3"),
                    props:route=>{
                        console.log(route);
                        return {
                            user1:route.params.user,
                            age1:route.params.age,
                            sex1:route.params.sex,
                            user2:route.query.user,
                            age2:route.query.age,
                            sex2:route.query.sex,

                        }
                    }
                },

            ]
        },
        {path:"/myVuex",name:"myVuex",meta:{isLogin:false,name:"Vuex"},component:()=>import("@/components/myVuex/myVuex")}
        // {
        //     path: '/hello',
        //     name: 'HelloWorld',
        //     component: HelloWorld
        // }
    ]
})
