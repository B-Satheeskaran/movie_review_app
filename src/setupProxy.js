const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/omdb",
    createProxyMiddleware({
      target: "http://www.omdbapi.com",
      changeOrigin: true,
      pathRewrite: {
        "^/omdb": " ", // remove base path
      },
    })
  );
  app.use(
    "/api/v1",
    createProxyMiddleware({
      target: "http://liima.huex.xyz:8080",
      changeOrigin: true,
    })
  );
};
