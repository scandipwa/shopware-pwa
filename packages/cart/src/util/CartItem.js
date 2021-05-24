/** @namespace Cart/Util/CartItem/convertProductToCartItem */
export const convertProductToCartItem = (product, quantity = 1) => ({
    type: 'product',
    referencedId: product.id,
    quantity
});
