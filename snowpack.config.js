const cfg = require('./client/config.json');

module.exports = {
  workspaceRoot: './',
  devOptions: {
    port: cfg.clientPort,
    routes: [
      { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    open: 'none',
    hmr: true,
    hmrErrorOverlay: false,
    secure: false
  },
  buildOptions: {
    out: './client/dist',
    baseUrl: '/',
    watch: false,
    sourcemap: false
  },
  mount: {
    './common/src': { url: '/dist/@soncodi/common' },
    './client/src': { url: '/dist' },
    './client/public': { url: '/', static: true }
  }
};
