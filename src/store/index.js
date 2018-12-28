import Vue from 'vue'
import Vuex from 'vuex'
// vuex日志插件，记录每一步mutation
import createLogger from 'vuex/dist/logger'

import app from './module/app'
Vue.use(Vuex)

const store = new Vuex.Store({
    // 模块化，方便管理数据
    modules: {
        app    // 小仓库
    },
    plugins: [createLogger()]  // 日志插件。会自动输出到控制台。输出的信息 有 状态改变的前中后
})

export default store;
