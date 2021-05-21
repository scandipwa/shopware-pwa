/** @namespace Framework/Util/GetTranslatedField/getTranslatedField */
export const getTranslatedField = (obj, fieldName) => {
    if (obj.translated && obj.translated[fieldName]) {
        return obj.translated[fieldName];
    }

    return obj.fieldName;
};
