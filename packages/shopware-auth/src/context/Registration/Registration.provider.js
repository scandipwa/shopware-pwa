/* eslint-disable react/no-unused-state */
import client from '@scandipwa/framework/src/util/Client';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import RegistrationContext from './Registration.context';

/** @namespace ShopwareAuth/Context/Registration/Provider/RegistrationProvider */
export class RegistrationProvider extends PureComponent {
    state = {
        countries: [],
        salutations: [],

        areCountriesLoaded: false,
        areSalutationsLoaded: false,

        enteredValues: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            street_address: '',
            postal_code: '',
            city: '',
            salutation: '',
            country: ''
        }
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

    handleInputChange(name, value) {
        const { enteredValues } = this.state;

        this.setState({
            enteredValues: {
                ...enteredValues,
                [name]: value
            }
        });
    }

    register = async () => {
        const { enteredValues } = this.state;

        console.log(enteredValues);
    };

    getContextValue() {
        return {
            ...this.state,
            handleInputChange: this.handleInputChange.bind(this),
            register: this.register.bind(this)
        };
    }

    render() {
        const { children } = this.props;

        return (
            <RegistrationContext.Provider value={ this.getContextValue() }>
                { children }
            </RegistrationContext.Provider>
        );
    }
}

export default RegistrationProvider;
