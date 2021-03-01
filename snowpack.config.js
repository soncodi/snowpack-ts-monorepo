const cfg = require('./client/config.json');

module.exports = {
  workspaceRoot: './',
  routes: [
    { match: 'routes', src: '.*', dest: '/index.html' }
  ],
  devOptions: {
    port: cfg.clientPort,
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
    './client/src': { url: '/dist' },
    './client/public': { url: '/', static: true }
  }
};
