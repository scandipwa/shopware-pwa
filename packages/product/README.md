# REQUEST

## Single product by ID

Example:
/store-api/product/04d0107ac065458da3a0fe0b9f9bc58c

- 05a7298bc7314ca5b9011c5cabfac217
- 063e4aea8ae4472ca215abe114e04938
- 0661aa09d27642b3826e51a06be0dc62

## All product request

Example:
/store-api/product

# CONTEXT

## Product context

- simply return product

## Filtering context

- should prepare filtering object from URL
- allow to set URL paramters, should update URL

> "page": 4, => is actually page 3 (on BE)

// modify aggregations
// modify the pages and limits

> DO NOT REQUEST FROM HERE, only work with filters

## Product list abstract context

// make sure this is inside of filtering context

- products list
- aggregations
- sorting options
- price information

- make a request here, use filters from filtering context
- throw once used without overriding request logic ?

> Once you want a different request - extend, change it

# LAYOUTS

## Product view

- simple layout
- context container

## Product list view

- simple layout
- should listen to Product list context

## Product preview

- simple layout + context container

## Product pagination

- Listen for filtering context updates
- Update the filtering context

## Product list Aggregations

- Listen for filtering context updates
- Update the filtering context

## Product list Aggregation

- A single aggregation display
