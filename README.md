# Scandi X Shopware React Storefront

The storefront to be proud of.

## Installation

Currently, the only installation option available is git clone, which should only be used for contribution. Once the application is complete, the single-command-bootstrapper will be deployed.

Contribution setup (you can also use fork instead of original repository):

```bash
# clone the repository
git clone git@github.com:scandipwa/shopware-pwa.git

cd shopware-pwa

# install dependencies
yarn 

cd packages/blank-theme

# run Next project
yarn dev
```

## Overview

This project is a modular storefront for [Shopware 6](https://www.shopware.com/en/products/shopware-6/), built with native API.

It is an "abstract" blank theme built using [Next](http://nextjs.com/) and [React](http://react.com/). It contains no styling code, and all functionality is splitted into small modules, each encapsulating a single entity or entity-relation.

This product is not monolythic, it is modular. It means more flexibility, as module (it's functionality) can be disabled or swapped at any given moment.

## Structure

This project currently implements functionality of following enitities in following modules:

| Entity name | Location |
|-|-|
| SEO-URL | `packages/seo-url` |
| CMS | `packages/cms` |
| Category | `packages/category` |
| Product | `packages/product` |
| Landing | `packages/landing` |

### Folder structure

Most modules contain the following folder structure:

- `api` - the folder to contain requests and typings
- `context` - the folder to contain Context and Context Providers
- `component` - the folder to contain layouts and templates
- `plugin` - the folder to contain functionality integration

## Concepts

It's important to understand following concepts before starting the development:

- **A theme** – the collection of extensions styled to have a different appearance. Themeing is done by [shadowing files](https://docs.mosaic.js.org/themes/parent-themes).

- **An extension** – a standalone module, that implements an entity. It contains functioanlity and integration. But modules should not countain styles.

- **A plugin** – is a code located in `plugin` folder. That code is injected into the application, and intercepts some function, method or property call. The plugins are always bound to some namespace.

## Data-flow

In general, data-flow is as simple as:

1. URL is passed to SEO-URL module to determine the URL type.
2. For current URL entity type, the specific entity layout and context is rendered.

### CMS

For CMS, we render `sections`, `blocks` and `slots` one in another, thus achieving the rendered CMS tree.

We lookup the implementation for each entity type in `CmsContentFactory` properties. Plugins from other modules inject these values in, to provide support for different CMS modules.

### Products

For products, we have multiple contexts: `FilteringContext` and `ProductListContext`.

- `FilteringContext` is used to synchronize the filtering options with URL.

- `ProductListContext` is used to synchronize the product and aggregations data with the application.