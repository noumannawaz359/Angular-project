
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'Angular-project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Angular-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: 'a077a42db79beb071b04b486136f61426b021b286b2ef255149737ce589bebf0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'd3bb193b704ab97923981a38bca3723297f402d26d1c1d31b20d7d598ada6761', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20856, hash: '861c776ec3ee9b48eb30d70f527c6ee6f1b3a06037c0428b38f90dbaf054f8bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
