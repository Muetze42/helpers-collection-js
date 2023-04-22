/**
 * Get an item from an array or object using "dot" notation.
 *
 * @return string
 * @param obj
 * @param path
 * @param fallback
 */
export function data_get(obj, path, fallback=null) {
    // Source: https://stackoverflow.com/a/22129960
    let properties = Array.isArray(path) ? path : path.split('.');
    let value = properties.reduce((prev, curr) => {
        return prev && prev[curr];
    }, obj);

    return value !== undefined ? value : fallback;
}

/**
 * Set an item on an array or object using dot notation.
 *
 * @return string
 * @param obj
 * @param path
 * @param value
 */
export function data_set(obj, path, value) {
    // Source: https://stackoverflow.com/a/20240290
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
 * @param args
 */
export function dd(args) {
    console.log(args);
}

/**
 * Convert the given url to a relative url.
 *
 * @return string
 * @param url
 */
export function relative_url(url) {
    return url.replace(/^(?:\/\/|[^/]+)*\//, '/');
}

/**
 * Convert the given url to a tidy url.
 *
 * @return string
 * @param url
 */
export function tidy_url(url) {
    return url.replace(/([^:])(\/\/+)/g, '$1/')
}
