import { config } from '@/config'

export const getApp = () => {
  console.log(config)
  const app = window.tcb.init({
    env: config.envId
  })

  app.auth({
    persistence: 'local'
  })
  return app
}
