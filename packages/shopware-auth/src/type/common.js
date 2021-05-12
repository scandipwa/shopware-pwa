import PropTypes from 'prop-types';

export const CountriesType = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        translated: PropTypes.shape({ name: PropTypes.string })
    })
);

export const SalutationsType = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        displayName: PropTypes.string
    })
);
