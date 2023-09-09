/**
 * The __ function translates the given translation string.
 *
 * @param key
 * @param replace
 * @param translations
 * @return string
 */
export function __(key, replace = {}, translations = null) {
    if (translations && translations[key]) {
        key = translations[key]
    }

    Object.keys(replace).forEach(function (search) {
        key = key.replace(':' + search, replace[search])
    })

    return key
}
