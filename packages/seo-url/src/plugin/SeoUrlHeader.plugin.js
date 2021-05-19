const addBaseHeaders = (member) => ({
    ...member,
    'sw-include-seo-urls': true
});

export default {
    'Framework/Util/Client/Client': {
        'member-property': {
            baseHeaders: addBaseHeaders
        }
    }
};
