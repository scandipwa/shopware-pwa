/** @namespace Framework/Util/Array/removeItemFromArrayOnce */
export const removeItemFromArrayOnce = (arr, value) => {
    const index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }

    return arr;
};

/** @namespace Framework/Util/Array/removeItemFromArrayAll */
export const removeItemFromArrayAll = (arr, value) => {
    // eslint-disable-next-line fp/no-let
    let i = 0;

    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }

    return arr;
};
