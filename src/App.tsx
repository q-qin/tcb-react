import React, { useState } from 'react'
import { Skeleton } from 'antd'
import { HashRouter } from 'react-router-dom'
import { RenderRoutes, appRoutes } from './routes'
import { MainLayout } from './layout'
import { AuthRoute } from "@/components/AuthRoute";
import 'antd/dist/antd.css'
import './App.less'

const menus = appRoutes.filter((item) => item.menu)

function App() {
  console.log(1);
  const [logined, setLogined ] = useState(false)
  const [jsload, setJsload ] = useState(false)
  const loadScript = async () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://imgcache.qq.com/qcloud/tcbjs/1.5.0/tcb.js'
    document.head.appendChild(script)

    return new Promise<void>((resolve) => {
      script.onload = () => {
        resolve()
      }
    })
  }

  loadScript().then(() => {
    setJsload(true);
  })

  return (
    <div className="App">
      {logined && jsload && (
        <MainLayout menus={menus}>{RenderRoutes()}</MainLayout>
      )}
      {!logined && (
        <div>未登录</div>
      )}
    </div>
  )
}

export default () => {
  return (
    <HashRouter>
      <AuthRoute></AuthRoute>
      <App />
    </HashRouter>
  )
}
