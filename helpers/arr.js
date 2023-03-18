/**
 * Find Index Array Key.
 *
 * @param data
 * @param value
 * @param key
 * @return int|null
 */
export function arrFindKey(data, value, key = 'id') {
    let index = null
    let forceBreakException = {}

    try {
        data.forEach(function (dataValue, dataKey) {
            if (dataValue[key] === value) {
                index = dataKey
                throw forceBreakException
            }
        })
    } catch (e) {
        if (e !== forceBreakException) {
            throw e
        }
    }

    return index
}
