import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import myplugin from './plugins/myplugin'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  plugins: [myplugin],  // vuex插件
  // strict: true  // 严格模式，防止用户手动更改状态
  strict: process.env.NODE_ENV !== 'production'
  /* 但是尽量不要在生产环境下使用严格模式，严格模式会深度检测状态树来检测不合格的状态变更，在发布环境下关闭严格模式，以避免性能损失 */
})
