import { PureComponent } from 'react';

import FormComponent from './Form.component';

/** @namespace Layout/Component/Form/Container/FormContainer */
export class FormContainer extends PureComponent {
    containerFunctions = {
        handleSubmit: this.handleSubmit.bind(this)
    };

    handleChange(fieldName, value) {

    }

    handleSubmit(event) {

    }

    render() {
        return (
            <FormComponent />
        );
    }
}

export default PureComponent;
