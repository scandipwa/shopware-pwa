import client from '@scandipwa/framework/src/util/Client';

/** @namespace Context/Api/Context/Request/getShopwareContext */
export const getShopwareContext = () => client.get('/store-api/context');
