import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import de from '../locale/de.ts'
import en from '../locale/en.ts'
import i18n from '../locale/lang.js'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  }
})
