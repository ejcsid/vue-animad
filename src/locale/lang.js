import Vue from 'vue'
import VueI18n from 'vue-i18n'
import de from './de.ts'
import en from './en.ts'

Vue.use(VueI18n)
const locale = 'de'
const messages = {
    de: de,
    en: en,
}

const i18n = new VueI18n({
    locale,
    messages
})

Vue.filter('translateArray', function(value, prefix){
  // empty
  if (!value) return ''

  // correct setting for prfix
  if (prefix && !prefix.endsWith('.')) prefix+='.'
  if (!prefix) prefix=''

  // not an array
  if (!Array.isArray(value)) return i18n.t(prefix+value)

  // loop array to translate each element in array
  var translated = []
  value.forEach(function(el) {
    translated.push(i18n.t(prefix+el))
  })
  return translated
})

export default i18n
