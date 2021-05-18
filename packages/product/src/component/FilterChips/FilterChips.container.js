import { removeItemFromArrayAll } from '@scandipwa/framework/src/util/Array';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import {
    MANUFACTURER_PARAM_KEY,
    MAX_PRICE_PARAM_KEY,
    MIN_PRICE_PARAM_KEY,
    PROPERTIES_PARAM_KEY
} from '../../context/Filtering.provider';
import ProductListContext from '../../context/ProductList.context';
import FilterChipsComponent from './FilterChips.component';

/** @namespace Product/Component/FilterChips/Container/FilterChipsContainer */
export class FilterChipsContainer extends HigherOrderComponent {
    selectedFiltersGetterList = [
        this.getManufacturerOptions.bind(this),
        this.getPropertiesOptions.bind(this),
        this.getPriceOptions.bind(this)
    ];

    getManufacturerLabelById(manufacturerId) {
        const {
            ProductListContext: {
                aggregations: {
                    manufacturer: {
                        entities
                    }
                }
            }
        } = this.props;

        return (
            entities.find((manufacturer) => manufacturer.id === manufacturerId)
            || {}
        ).translated.name;
    }

    getManufacturerOptions() {
        const {
            FilteringContext: {
                setProperty,
                selectedFilters: {
                    [MANUFACTURER_PARAM_KEY]: currentManufacturers
                }
            }
        } = this.props;

        return currentManufacturers.map((manufacturerId) => ({
            key: manufacturerId,
            label: this.getManufacturerLabelById(manufacturerId),
            // TODO: read the manufacturers from props here
            onClick: () => setProperty(
                MANUFACTURER_PARAM_KEY,
                removeItemFromArrayAll(
                    currentManufacturers,
                    manufacturerId
                )
            )
        }));
    }

    getPropertyLabelById(propertyId) {
        const {
            ProductListContext: {
                aggregations: {
                    properties: {
                        entities
                    }
                }
            }
        } = this.props;

        // eslint-disable-next-line fp/no-let
        for (let i = 0; i < entities.length; i++) {
            const property = entities[i];

            // eslint-disable-next-line fp/no-let
            for (let j = 0; j < property.options.length; j++) {
                const option = property.options[j];

                if (option.id === propertyId) {
                    return option.translated.name;
                }
            }
        }

        return '';
    }

    getPropertiesOptions() {
        const {
            FilteringContext: {
                setProperty,
                selectedFilters: {
                    [PROPERTIES_PARAM_KEY]: currentProperties
                }
            }

        } = this.props;

        return currentProperties.map((propertyId) => ({
            key: propertyId,
            label: this.getPropertyLabelById(propertyId),
            // TODO: read the manufacturers from props here
            onClick: () => setProperty(
                PROPERTIES_PARAM_KEY,
                removeItemFromArrayAll(
                    currentProperties,
                    propertyId
                )
            )
        }));
    }

    getPriceOptions() {
        const {
            FilteringContext: {
                setProperty,
                selectedFilters: {
                    [MIN_PRICE_PARAM_KEY]: minPrice,
                    [MAX_PRICE_PARAM_KEY]: maxPrice
                }
            }
        } = this.props;

        const priceFilters = [];

        if (minPrice > 0) {
            priceFilters.push({
                key: MAX_PRICE_PARAM_KEY,
                label: `Price from ${ minPrice }`,
                onClick: () => setProperty(MIN_PRICE_PARAM_KEY, 0)
            });
        }

        if (maxPrice > 0) {
            priceFilters.push({
                key: MIN_PRICE_PARAM_KEY,
                label: `Price to ${ maxPrice }`,
                onClick: () => setProperty(MAX_PRICE_PARAM_KEY, 0)
            });
        }

        return priceFilters;
    }

    getSelectedFilters() {
        return this.selectedFiltersGetterList.reduce((acc, filterGetter) => {
            try {
                return [
                    ...acc,
                    ...filterGetter()
                ];
            } catch (e) {
                return acc;
            }
        }, []);
    }

    containerProps = () => ({
        selectedFilters: this.getSelectedFilters()
    });
}

export default withHOC(
    withContexts(
        FilterChipsContainer,
        [
            FilteringContext,
            ProductListContext
        ]
    ),
    FilterChipsComponent
);
