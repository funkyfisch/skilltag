/* If running inside Docker, using 0.0.0.0 will fix the problem of how to serve
 within the container. */
const IN_CONTAINER = JSON.parse(process.env.IN_CONTAINER.toLowerCase());
const DEV_HOST = IN_CONTAINER ? "0.0.0.0" : "localhost";
const DEV_PORT = process.env.UI_PORT || process.env.PORT || 8080;
const COUCHDB_USER = process.env.COUCHDB_USER;
const COUCHDB_PASSWORD = process.env.COUCHDB_PASSWORD;
const COUCHDB_HOST = process.env.COUCHDB_HOST;
const COUCHDB_PORT = process.env.COUCHDB_PORT;

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
          logLevel: "info",
          target: `http://${COUCHDB_HOST}:${COUCHDB_PORT}`,
          auth: `${COUCHDB_USER}:${COUCHDB_PASSWORD}`,
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    }
  }
};
