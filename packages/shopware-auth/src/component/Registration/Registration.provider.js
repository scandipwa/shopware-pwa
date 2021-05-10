/* eslint-disable react/no-unused-state */
import client from '@scandipwa/framework/src/util/Client';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import RegistrationContext from './Registration.context';

/** @namespace ShopwareAuth/Component/Registration/Provider/RegistrationProvider */
export class RegistrationProvider extends PureComponent {
    state = {
        countries: [],
        salutations: [],

        areCountriesLoaded: false,
        areSalutationsLoaded: false
    };

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    componentDidMount() {
        const {
            areCountriesLoaded,
            areSalutationsLoaded
        } = this.state;

        if (!areCountriesLoaded) {
            this.fetchCountries();
        }

        if (!areSalutationsLoaded) {
            this.fetchSalutations();
        }
    }

    fetchCountries = async () => {
        const response = await client.get('/store-api/country');

        this.setState({
            areCountriesLoaded: true,
            countries: response.elements
        });
    };

    fetchSalutations = async () => {
        const response = await client.get('/store-api/salutation');

        this.setState({
            areSalutationsLoaded: true,
            salutations: response.elements
        });
    };

    render() {
        const { children } = this.props;

        return (
            <RegistrationContext.Provider value={ this.state }>
                { children }
            </RegistrationContext.Provider>
        );
    }
}

export default RegistrationProvider;
