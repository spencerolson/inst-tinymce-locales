const locales = require('lib/locales')

const tinyMCELocales = {
  es: 'es'
}

const instLocales = [
  'en',
  'en-au-x-unimelb',
  'zh_HK',
  'nb',
  'en_GB',
  'mi',
  'es',
  'da',
  'pt',
  'de',
  'en_AU',
  'pl',
  'sv',
  'fr_CA',
  'ja',
  'pt_BR',
  'ru',
  'fr',
  'ar',
  'nl',
  'zh',
]

exports.fetchLocale = (originLocale) => {
  const locale = tinyMCELocales[originLocale]
  if (!locale) {
    return locales.en
  }

  return locales[locale]
}
