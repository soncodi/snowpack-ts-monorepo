const cfg = require('./client/config.json');

const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  workspaceRoot: './',
  devOptions: {
    port: cfg.clientPort,
    routes: [
      { match: 'routes', src: '.*', dest: '/index.html' }
    ],
    open: 'none',
    hmr: !PROD,
    hmrErrorOverlay: false,
    secure: false
  },
  buildOptions: {
    out: 'build',
    baseUrl: '/',
    watch: true,
    sourcemap: false
  },
  mount: {
    './common/src': { url: '/dist/@soncodi/common' },
    './client/src': { url: '/dist' },
    './client/public': { url: '/', static: true }
  }
};
