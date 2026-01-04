import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  console.log('env',env);
  
  return {
    base: '/',
    resolve: {
      alias:{
        '@': path.resolve(__dirname, 'src'),
      }
    },
    assetsInclude: ['**/*.gltf'],
    plugins: [react()],
    css: {
      modules: {
          // css模块化 文件以.module.[css|less|scss]结尾
          generateScopedName: '[name]__[local]___[hash:164:5]',
          hashPrefix: 'prefix'
      },
      preprocessorOptions: {
          less: {
              javascriptEnabled: true
          }
      }
    },
    build:{
      rollupOptions:{
        output:{
          manualChunks(id){
            if(id.includes('node_modules')){
              return 'vender'
            }
          }
        }
      }
    },
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:3001",
          changeOrigin: true
        }
      }
    }
  }
})
