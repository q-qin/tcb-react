import { getApp } from '@/tcb';
import { notification } from 'antd';
const app = getApp();

export const login =(data)=> {
  return new Promise(async(resolve,reject)=>{
    try{
      app.callFunction({
        name: 'login', data:{...data}
      }).then((result)=>{
        console.log(result);
        resolve(result)
      }).catch((e)=>{
        notification.error({ message: '服务器异常', description:e.message });
        reject()
      })
    }catch(e){
      notification.error({ message: '服务器异常',description:e.message })
      reject()
    }
  })
}