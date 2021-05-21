/** @namespace Framework/Util/Compare/arrayCompare */
export const arrayCompare = (_arr1, _arr2) => {
    if (
        !Array.isArray(_arr1)
      || !Array.isArray(_arr2)
      || _arr1.length !== _arr2.length
    ) {
        return false;
    }

    // .concat() to not mutate arguments
    const arr1 = _arr1.concat().sort();
    const arr2 = _arr2.concat().sort();

    // eslint-disable-next-line fp/no-let
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};
