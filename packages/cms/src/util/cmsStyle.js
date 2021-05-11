/** @namespace Cms/Util/CmsStyle/getStylesFromCmsEntity */
export const getStylesFromCmsEntity = (entity) => ({
    backgroundColor: entity.backgroundColor,
    backgroundImage: entity.backgroundMedia
        ? `url(${entity.backgroundMedia.url})`
        : null,
    marginBottom: entity.marginBottom,
    marginLeft: entity.marginLeft,
    marginRight: entity.marginRight,
    marginTop: entity.marginTop
});

/** @namespace Cms/Util/CmsStyle/getClassNameFromCmsEntity */
export const getClassNameFromCmsEntity = (entity) => entity.cssClass;
