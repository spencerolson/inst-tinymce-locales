const locales = require('./lib/locales/index')

const defaultLanguageCodeMapings = {
  ar: 'ar_SA',
  da: 'da',
  de: 'de',
  'en-au-x-unimelb': 'en_GB',
  en_AU: 'en_GB',
  en_GB: 'en_GB',
  es: 'es',
  fr: 'fr_FR',
  fr_CA: 'fr_FR',
  ja: 'ja',
  mi: undefined, // no tinymce translations yet, will use english
  nb: 'nb_NO',
  nl: 'nl',
  pl: 'pl',
  pt: 'pt_PT',
  pt_BR: 'pt_BR',
  ru: 'ru',
  zh: 'zh_CN',
  zh_HK: 'zh_TW',
}

exports.fetchTranslations = (languageCode, customLanguageCodeMappings) => {
  const mappings = { ...defaultLanguageCodeMapings, ...customLanguageCodeMappings }
  const tinyMCELanguageCode = mappings[languageCode]
  const content = tinyMCELanguageCode && locales[tinyMCELanguageCode]
  return tinyMCELanguageCode && content && { languageCode: tinyMCELanguageCode, content }
}
