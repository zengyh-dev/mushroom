/*
 * @Author: your name
 * @Date: 2021-02-01 19:51:18
 * @LastEditTime: 2021-02-21 17:20:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Step-4-Vue\Vue\08-mall\mushroom\src\main.js
 */


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementsPlus from './plugins/elements'; // 引入element-ui

const app = createApp(App)
ElementsPlus(app)
app.use(store).use(router).mount('#app')



