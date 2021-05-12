/* eslint-disable arrow-body-style */

/** @namespace Framework/Util/CompareObjects/compareObjects */
export const compareObjects = (firstObject, secondObject) => {
    // TODO rewrite to be more efficient, if possible!
    return {
        isQqual() {
            return JSON.stringify(firstObject) === JSON.stringify(secondObject);
        },
        isNotEqual() {
            return !this.equal();
        }
    };
};
