/**
 * Get an item from an array or object using "dot" notation.
 *
 * @return string
 * @param obj
 * @param path
 * @param fallback
 */
export function data_get(obj, path, fallback=null) {
    let properties = Array.isArray(path) ? path : path.split('.');
    let value = properties.reduce((prev, curr) => {
        return prev && prev[curr];
    }, obj);

    return value !== undefined ? value : fallback;
}

/**
 * Set an item on an array or object using "dot" notation.
 *
 * @return string
 * @param obj
 * @param path
 * @param value
 */
export function data_set(obj, path, value) {
    let parts = path.split('.');
    while (parts.length - 1) {
        let key = parts.shift();
        let shouldBeArray = parts.length ? new RegExp('^[0-9]+$').test(parts[0]) : false;
        if (! (key in obj)) {
            obj[key] = shouldBeArray ? [] : {};
        }
        obj = obj[key];
    }
    obj[parts[0]] = value;
}

/**
 * Outputs a message to the web console.
 *
 * @return string
 */
export function dd(...args) {
    console.log(args);
}

/**
 * Convert the given url to a relative url.
 *
 * @param {String} url
 *
 * @return string
 */
export function relative_url(url) {
    return url.replace(/^(?:\/\/|[^/]+)*\//, '/');
}

/**
 * Convert the given url to a tidy url.
 *
 * @param {String} url
 *
 * @return string
 */
export function tidy_url(url) {
    return url.replace(/([^:])(\/\/+)/g, '$1/')
}

/**
 * Finds whether the type of variable is float.
 *
 * @return Boolean
 */
export function is_float(n) {
    return n === +n && n !== (n | 0)
}

/**
 * Find whether the type of variable is integer
 *
 * @return Boolean
 */
export function is_integer(n) {
    return n === +n && n === (n | 0)
}

/**
 * Finds whether a variable is a number.
 *
 * @return Boolean
 */
export function is_numeric(n) {
    return is_float(n) || is_integer(n)
}
