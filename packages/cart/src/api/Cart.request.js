import client from '@scandipwa/framework/src/util/Client';

/** @namespace Cart/Api/Cart/Request/createCart */
export const createCart = () => client.get('/store-api/checkout/cart');

/** @namespace Cart/Api/Cart/Request/addToCart */
export const addToCart = (body) => client.post('/store-api/checkout/cart/line-item', { body });

/** @namespace Cart/Api/Cart/Request/removeFromCart */
export const removeFromCart = (body) => client.delete('/store-api/checkout/cart/line-item', { body });

/** @namespace Cart/Api/Cart/Request/updateCartItems */
export const updateCartItems = (body) => client.patch('/store-api/checkout/cart/line-item', { body });
