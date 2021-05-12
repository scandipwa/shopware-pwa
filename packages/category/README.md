# Request of a category by ID

SAMPLE URL:
`/store-api/category/79f30922410344cca284b80be225cbfe`

83f98618b7924ecb8c67f6ce627180b1
8a30c13f8abc405eab773624d311e96f
96d17aa0c9b048859101ad8102406a1f

> Keep requests in src/api

# Context of category

- Category context
- Category provider

> Provide a display name for the context

Make the context return following values:
- category
- id

> Keep contextes in src/context

# Layout of category

It should be extensible, so we can add sections later on!
=> use `createSortedRenderMap`

- A component that simply renders sections
- A container that renders the context provider

A container is a HOC, that simply wraps the component with the context

> Keep requests in src/component
