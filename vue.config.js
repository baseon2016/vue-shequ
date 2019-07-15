module.exports = {
  // 当vue的环境处于 production (生产环境)时，将 publicPath 改成 /Vue-js-shequ , 开发环境是 /
  publicPath: process.env.NODE_ENV === "production" ? "/vue-shequ/" : "/"
};
