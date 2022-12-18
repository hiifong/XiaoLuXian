import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import requireTransform from 'vite-plugin-require-transform';
const path = require('path');
// https://vitejs.dev/config/
export default defineConfig({
  	plugins: [
	  	vue(),
	  	AutoImport({
	  		imports:['vue','vue-router']
	  	}),
	  	requireTransform({
	      fileRegex: /.js$|.vue$/
	    }),
	],
	resolve: {
	    // 配置路径别名
	    alias: {
	      '@': path.resolve(__dirname, './src'),
	    },
	},
  	server:{
		proxy:{
			'/api':'http://testapi.xuexiluxian.cn'
		}
	}
})