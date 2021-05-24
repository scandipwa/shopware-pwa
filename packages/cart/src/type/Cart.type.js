import PropTypes from 'prop-types';

export const CartItemType = PropTypes.shape({
    // TODO
});

export const CartPriceType = PropTypes.shape({
    apiAlias: PropTypes.string,
    netPrice: PropTypes.number,
    positionPrice: PropTypes.number,
    rawTotal: PropTypes.number,
    taxStatus: PropTypes.string,
    totalPrice: PropTypes.number
});

export const CartType = PropTypes.shape({
    lineItems: PropTypes.arrayOf(CartItemType)
});
