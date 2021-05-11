1. Get a URL rewrite

POST: https://scandipwa.shopware.store/store-api/seo-url

{
    "filter": [
        {
            "type": "equals",
            "field": "seoPathInfo",
            "value": "FIRE-BOWL-DAO/SW10413"
        }
    ]
}

2. Get the type of returned page and request it ?

 {
    "salesChannelId": "98432def39fc4624b33213a56b8c944d",
    "languageId": "2fbb5fe2e29a4d70aa5854ce7ce3e20b",
    "routeName": "frontend.detail.page", // <--- the type
    "foreignKey": "04d0107ac065458da3a0fe0b9f9bc58c", // <--- the entity
    "pathInfo": "/detail/04d0107ac065458da3a0fe0b9f9bc58c",
    "seoPathInfo": "FIRE-BOWL-DAO/SW10413", // <--- the URL
    "isCanonical": true,
    "isModified": false,
    "isDeleted": false,
    "isValid": null,
    "url": null,
    "customFields": null,
    "error": null,
    "_uniqueIdentifier": "13d7878b4c644f0cb14d1d571eb7cd09",
    "versionId": null,
    "translated": [],
    "createdAt": "2020-08-06T06:26:42.505+00:00",
    "updatedAt": "2021-04-30T06:01:51.685+00:00",
    "extensions": {
        "foreignKeys": {
            "apiAlias": "array_struct"
        }
    },
    "id": "13d7878b4c644f0cb14d1d571eb7cd09",
    "apiAlias": "seo_url"
}

- `frontend.detail.page` => product
- `frontend.navigation.page` => category
- `frontend.landing.page` => landing-page

