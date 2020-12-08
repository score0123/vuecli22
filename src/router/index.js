import router from './routes';

import elementui from "element-ui";
import { Message } from 'element-ui';

router.beforeEach((to,from,next)=>{
    console.log("到哪里去to:",to);
    console.log("从哪里来from:",from);
    // console.log("to.matched:",to.matched);
    // console.log(to.matched.some((zujian)=>zujian.meta.isLogin));

    // if(to.matched.some((zujian)=>zujian.meta.isLogin)){//是否可登录(可控制所有父子组件)
    //     Message({
    //         message:"请登录",// 消息文字
    //         center:true,     // 文字是否居中
    //         duration:1000,   // 显示时间
    //     })
    //     setTimeout(() => {
    //         // next("/");
    //         next({
    //             path:"/login",
    //             // query:{redirect:to.fullPath}//登录后将回到登录之前的路由
    //           })
    //     }, 1300);
    // }else{
    //     next();
    //     document.title=to.meta.name;
    // }
    next();
})


export default router;

    // console.log("from:",to.meta.isLogin);
    // if(to.meta.isLogin){//true是需要登录
    //     Message({
    //         message:"请登录",// 消息文字
    //         center:true,     // 文字是否居中
    //         duration:1000,   // 显示时间
    //       })
    //       setTimeout(() => {
    //         next("/");
    //       }, 1300);
    // }else{
    //     next();
    //     document.title=to.meta.name;
    // }