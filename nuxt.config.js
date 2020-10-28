
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name?'好看商城':'',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description?'啥都卖':'' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    'sierra-library/lib/index.scss',
    'element-ui/lib/theme-chalk/display.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth'
  ],
  auth:{
    strategies: {
      local: {
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'token' },
         // user: { url: 'me', method: 'get', propertyName: 'title' },
         user:false,
          logout: false
        }
      }
    }
  },
  axios: {
    prefix: '/api/',  
    baseURL: 'http://localhost:9999',
    proxy: true,
    // credentials: true,
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: [/^element-ui/],
  },
  proxy:{
    '/api/': { 
      pathRewrite: {'^/api/': '/'},
      target: 'http://localhost:9999'
    }
  }
}
