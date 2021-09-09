const cloud = require("@cloudbase/node-sdk");
exports.main = async (event, context) => {
  const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV,
  });
 
  const { userId = 'tcb00' } = event.queryString || {}
  if (!/^[a-zA-Z0-9]{4,32}$/.test(userId)) {
    return {
      isBase64Encoded: false,
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  }

  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      userId:userId,
      token:`token-${123456}`
    })
  }
};
