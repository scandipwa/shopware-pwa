import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace ShopwareAuth/Component/RegistrationForm/Abstract/RegistrationFormAbstract */
export class RegistrationFormAbstract extends PureComponent {
    static propTypes = {
        handleChange: PropTypes.func.isRequired
    };

    renderSelectDropdown(name, collection, mapper) {
        const {
            handleChange,
            [name]: value
        } = this.props;

        return (
            <label htmlFor={ name }>
                <select
                  name={ name }
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={ (event) => handleChange(name, event.target.value) }
                  value={ value }
                >
                    { collection.map((item) => {
                        const { value, displayName } = mapper(item);

                        return (
                            <option
                              key={ value }
                              value={ value }
                            >
                                { displayName }
                            </option>
                        );
                    }) }
                </select>
            </label>
        );
    }

    renderInput(name, placeholder, type = 'text') {
        const {
            handleChange,
            [name]: value
        } = this.props;

        return (
            <label htmlFor={ name }>
                <input
                  type={ type }
                  name={ name }
                  placeholder={ placeholder }
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={ (event) => handleChange(name, event.target.value) }
                  value={ value }
                />
            </label>
        );
    }
}

export default RegistrationFormAbstract;
