# inst-tinymce-locales

![npm](https://img.shields.io/npm/v/inst-tinymce-locales.svg)

Exposes a `fetchTranslations` function that takes a language code (required) and custom
language code mappings (optional), and returns an object with translations (if
translations for that language are supported) or `undefined` (if translations
for that language are not supported). Returned translation objects will have two keys:
`languageCode` and `content`. `languageCode` refers to the TinyMCE language code for the
translations, and `content` contains all translations. 

```
const { fetchTranslations } = require('inst-tinymce-locales')
fetchTranslations('ru') // returns a translations object
fetchTranslations('myCustomLanguage') // returns undefined
fetchTranslations('myCustomLanguage', { myCustomLanguage: 'ru' }) // returns a translations object
```

Once translations are fetched, one will typically want to load them in their tinymce instance:

```
translations = fetchTranslations('de')
tinymce.addI18n(translations.languageCode, translations.content)
```
