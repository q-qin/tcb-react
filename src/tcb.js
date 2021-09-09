import tcb from "@cloudbase/js-sdk";
// const config = require('../../cloudbaserc');

// 将你的环境 Id 填写到此处
export const envId = 'tcb-9gexqqgc086482f0';

export const getApp = () => {
  const app = tcb.init({
    env: envId,
  });

  app.auth().anonymousAuthProvider().signIn();

  return app;
};
