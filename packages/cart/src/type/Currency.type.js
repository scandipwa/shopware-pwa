import PropTypes from 'prop-types';

export const CurrencyType = PropTypes.shape({
    symbol: PropTypes.string,
    isoCode: PropTypes.string,
    translated: PropTypes.shape({
        name: PropTypes.string,
        shortName: PropTypes.string
    }),
    id: PropTypes.string
});
