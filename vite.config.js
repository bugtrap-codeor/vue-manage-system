// import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

let proxyObj = {}
proxyObj['/'] = {
    ws: false,
    target: "http://localhost:8081",
    changeOrigin: true,
    pathRewrite: {
        '^/': '/'
    }
}

export default {
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        include: ['schart.js']
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',
                changeOrigin: true,
                rewrite:(path) => path.replace(/^\/api/, '')
            }
        }
    },
}
// export default {
//     base: './',
//     plugins: [vue()],
//     optimizeDeps: {
//         include: ['schart.js']
//     },
//     devServer: {
//         host: 'localhost', // can be overwritten by process.env.HOST
//         port: 3000, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//         // autoOpenBrowser: false,
//         // errorOverlay: true,
//         // notifyOnErrors: true,
//         // poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
//         // Paths
//         // assetsSubDirectory: 'static',
//         // assetsPublicPath: '/',
//         proxy: proxyObj
//     }
// }
// //