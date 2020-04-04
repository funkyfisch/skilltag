const IN_CONTAINER = JSON.parse(process.env.IN_CONTAINER.toLowerCase());
/* If running inside Docker, using 0.0.0.0 will fix the problem of how to serve
 within the container*/
const DEV_HOST = IN_CONTAINER ? "0.0.0.0" : "localhost";
const DEV_PORT = process.env.DEV_PORT || 8080;
const API_HOST = process.env.API_HOST;
const API_PORT = parseInt(process.env.API_PORT) || 8081;

module.exports = {
  configureWebpack: {
    devServer: {
      // Various Dev Server settings
      host: DEV_HOST,
      port: DEV_PORT, // can be overwritten by process.env.PORT,
      // if port is in use, a free one will be determined
      proxy: {
        // proxy all requests
        "/api": {
          target: `${API_HOST}:${API_PORT}`,
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    }
  }
};
