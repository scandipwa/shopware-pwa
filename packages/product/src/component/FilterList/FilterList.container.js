import { removeItemFromArrayAll } from '@scandipwa/framework/src/util/Array';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import {
    MANUFACTURER_PARAM_KEY, MAX_PRICE_PARAM_KEY, MIN_PRICE_PARAM_KEY, PROPERTIES_PARAM_KEY
} from '../../context/Filtering.provider';
import ProductListContext from '../../context/ProductList.context';
import { SELECT_FILTER_TYPE } from '../SelectFilter/SelectFilter.config';
import FilterListComponent from './FilterList.component';

// TODO: sort, maybe move getters to context ???

/** @namespace Product/Component/FilterList/Container/FilterListContainer */
export class FilterListContainer extends HigherOrderComponent {
    /**
     * Preffered format:
     * - label
     * - name
     * - type
     * - onChange
     * - options
     *   - label
     *   - value
     */

    filterGetterList = [
        this.getManufacturerOptions.bind(this),
        this.getPropertiesOptions.bind(this),
        this.getPriceOptions.bind(this)
    ];

    onPriceRangeChange = (key, value) => {
        const { FilteringContext: { setProperty } } = this.props;
        setProperty(key, +value);
    };

    getPriceOptions() {
        const {
            FilteringContext: {
                selectedFilters: {
                    [MIN_PRICE_PARAM_KEY]: minPrice,
                    [MAX_PRICE_PARAM_KEY]: maxPrice
                }
            }
        } = this.props;

        return [{
            label: 'Price',
            name: 'price',
            type: 'range',
            onChange: this.onPriceRangeChange,
            options: [
                {
                    label: 'Min Price',
                    value: minPrice
                },
                {
                    label: 'Max Price',
                    value: maxPrice
                }
            ]
        }];
    }

    onPropertyChange = (propertyId) => {
        const {
            FilteringContext: {
                setProperty,
                selectedFilters: {
                    [PROPERTIES_PARAM_KEY]: currentProperties
                }
            }
        } = this.props;

        if (currentProperties.indexOf(propertyId) === -1) {
            // filter not found => add it
            setProperty(PROPERTIES_PARAM_KEY, [
                ...currentProperties,
                propertyId
            ]);

            return;
        }

        setProperty(
            PROPERTIES_PARAM_KEY,
            removeItemFromArrayAll(currentProperties, propertyId)
        );
    };

    getPropertiesOptions() {
        const {
            FilteringContext: {
                selectedFilters: {
                    [PROPERTIES_PARAM_KEY]: currentProperties
                }
            },
            ProductListContext: {
                aggregations: {
                    properties: {
                        entities: properties
                    }
                }
            }
        } = this.props;

        return properties
            .sort(({ position: A }, { position: B }) => A - B)
            .reduce((acc, property) => {
                if (property.filterable) {
                    acc.push({
                        label: property.translated.name,
                        name: property.id,
                        type: SELECT_FILTER_TYPE,
                        onChange: this.onPropertyChange,
                        options: property.options.map((option) => ({
                            label: option.translated.name,
                            value: option.id,
                            isSelected: currentProperties.indexOf(option.id) !== -1
                        }))
                    });
                }

                return acc;
            }, []);
    }

    onManufacturerChange = (manufacturerId) => {
        const {
            FilteringContext: {
                setProperty,
                selectedFilters: {
                    [MANUFACTURER_PARAM_KEY]: currentManufacturers
                }
            }
        } = this.props;

        if (currentManufacturers.indexOf(manufacturerId) === -1) {
            // filter not found => add it
            setProperty(
                MANUFACTURER_PARAM_KEY,
                [
                    ...currentManufacturers,
                    manufacturerId
                ]
            );

            return;
        }

        setProperty(
            MANUFACTURER_PARAM_KEY,
            removeItemFromArrayAll(currentManufacturers, manufacturerId)
        );
    };

    getManufacturerOptions() {
        const {
            FilteringContext: {
                selectedFilters: {
                    [MANUFACTURER_PARAM_KEY]: currentManufacturers
                }
            },
            ProductListContext: {
                aggregations: {
                    manufacturer: {
                        entities
                    }
                }
            }
        } = this.props;

        return [{
            label: 'Manufacturer',
            name: 'manufacturer',
            type: SELECT_FILTER_TYPE,
            onChange: this.onManufacturerChange,
            options: entities.map((manufacturer) => ({
                label: manufacturer.translated.name,
                value: manufacturer.id,
                isSelected: currentManufacturers.indexOf(manufacturer.id) !== -1
            }))
        }];
    }

    getAllFilters() {
        return this.filterGetterList.reduce((acc, filterGetter) => {
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
        allFilters: this.getAllFilters()
    });
}

export default withHOC(
    withContexts(
        FilterListContainer,
        [
            FilteringContext,
            ProductListContext
        ]
    ),
    FilterListComponent
);
