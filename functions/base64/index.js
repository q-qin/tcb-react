const cloud = require("@cloudbase/node-sdk");
exports.main = async function(event) {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });
  const { str = 'tcb' } = event;

  return {
    data: Buffer.from(str).toString('base64')
  };
};
