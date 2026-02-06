/**
 * 
 *    iEdon-Net PeerAPI Frontend     
 *          Configutation            
 * 
 */

import pkg from '../package.json'
export default {
    root: '/',
    version: pkg.version,
    package: `${pkg.name}/${pkg.version}`,
    apiPrefix: 'https://api.dn42.xeiu.top/',
    pingIntervalMs: 180000,
    configFallback: {
        netAsn: '4242421336',
        netName: 'Xeiu Network',
        netDesc: 'XEIU NETWORK',
        footerText: '',
        maintenanceText: ''
    },
  gravatarUrlPrefix: 'https://www.gravatar.com/avatar/',
  openAuthCallback: {
    // Compatibility:
    // will handle token to our type -> kioubit: 'https://iedon.net/openAuth?type=kioubit',
    kioubit: 'https://dn42.xeiu.top/openAuth?token=kioubit.dn42',
  },
    lgUrl: {
      'b63c28f7-1d5a-47e2-a918-0fc4b9e85d62': 'https://lg.dn42.xeiu.top/detail/jp01/',
      '4f0d2a81-93e7-46cb-b2c1-8d7f5e9ab034': 'https://lg.dn42.xeiu.top/detail/hk02/',
      'e27b54ac-5d31-45af-9f22-6b4d91c38e5f': 'https://lg.dn42.xeiu.top/detail/fr01/',
      'c8f1a37e-2d49-4c8a-bf65-7d3e9c21a4d0': 'https://lg.dn42.xeiu.top/detail/us01/',
      //'ad53f4c9-9e14-4b88-b62c-712de9fa32e0': 'https://lg.dn42.xeiu.top/detail/us02/',
      '7c92b5fa-4e3d-45c1-bd88-18d9c2a3e7f1': 'https://lg.dn42.xeiu.top/detail/cn01/',
    },
  grafana: {
    urlPrefix: 'https://dn42.xeiu.top',
    queryStringForLocating: {
      router: 'var-router_public',
      session: 'var-peer',
    }
  },
  mapDn42Url: 'https://map.iedon.net',
  metricPageRefreshInterval: 300000, // 5 minutes
}
