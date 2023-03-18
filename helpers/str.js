/**
 * Convert a value to camel case.
 *
 * @param value
 * @return string
 */
export function strCamel(value) {
    value = value.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

    return value.substring(0, 1).toLowerCase() + value.substring(1);
}

/**
 * Convert a string to kebab case.
 *
 * @param  value
 * @return string
 */
export function strKebab(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

/**
 * Convert a string to snake case.
 *
 * @param  value
 * @return string
 */
export function strSnake(value) {
    return value.replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/[\s_]+/g, '_')
        .toLowerCase();
}

/**
 * Convert a value to studly caps case.
 *
 * @param value
 * @return string
 */
export function strStudly(value) {
    value = value.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
    value = value.substring(0, 1).toLowerCase() + value.substring(1);

    return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * Make a string's first character uppercase.
 *
 * @param string
 * @return string
 */
export function strUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Make a string's first character lowercase.
 *
 * @param string
 * @return string
 */
export function strLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1)
}

/**
 * Convert the given string to title case.
 *
 * @param value
 * @return string
 */
export function strTitle(value) {
    return value.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

/**
 * Limit the number of characters in a string.
 *
 * @param value
 * @param limit
 * @param end
 * @return string
 */
export function strLimit(value, limit = 100, end = '...') {
    value = value.trim()
    let valueLength = value.length
    let endLength = end.length

    if (valueLength <= limit) {
        return value
    }

    return value.substring(0, limit - endLength) + end
}

/**
 * Strip whitespace (or other characters) from the beginning and end of a string.
 *
 * @param string
 * @param character
 * @return string
 */
export function strTrim(string, character = '\\s') {
    let regex = new RegExp('^' + character + '+|' + character + '+$', 'g')

    return string.replace(regex, '')
}

/**
 * Strip whitespace (or other characters) from the beginning of a string
 *
 * @param string
 * @param character
 * @return string
 */
export function strLtrim(string, character = '\\s') {
    let regex = new RegExp('^' + character + '*', 'g')

    return string.replace(regex, '')
}

/**
 * Strip whitespace (or other characters) from the end of a string
 *
 * @param string
 * @param character
 * @return string
 */
export function strRtrim(string, character = '\\s') {
    let regex = new RegExp(character + '+$', 'g')

    return string.replace(regex, '')
}
