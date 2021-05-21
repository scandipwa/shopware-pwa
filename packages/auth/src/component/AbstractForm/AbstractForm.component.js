/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
import { createSortedMap } from '@scandipwa/framework/src/util/SortedMap';
import {
    Field,
    InputCheckbox,
    InputRadio,
    InputSelect,
    InputText
} from '@virtual-module/ui';
import PropTypes from 'prop-types';
import { Fragment, PureComponent } from 'react';

/** @namespace Auth/Component/AbstractForm/Component/AbstractFormComponent */
export class AbstractFormComponent extends PureComponent {
    static propTypes = {
        /**
         * Correct form is:
         *
         * {
         *  [NAME]: {
         *   type: 'select' | 'input' | 'radio' | 'checkbox'
         *   inputProps,
         *   fieldProps
         *  }
         * }
         */
        fieldConfiguration: PropTypes.objectOf(PropTypes.shape({
            type: PropTypes.string,
            inputProps: PropTypes.shape({}),
            fieldProps: PropTypes.shape({})
        })).isRequired,
        initialFieldValues: PropTypes.shape({}),
        onFormSubmit: PropTypes.func,
        onFieldChange: PropTypes.func,
        // eslint-disable-next-line react/require-default-props
        renderFields: PropTypes.func
    };

    static defaultProps = {
        initialFieldValues: {},
        onFormSubmit: () => {},
        onFieldChange: () => {}
    };

    componentTypeMap = {
        select: InputSelect,
        input: InputText,
        radio: InputRadio,
        checkbox: InputCheckbox
    };

    __construct(props) {
        super.__construct(props);

        const {
            initialFieldValues,
            fieldConfiguration
        } = this.props;

        this.state = {
            fieldValues: initialFieldValues
        };

        this.fields = createSortedMap(fieldConfiguration);
    }

    onFieldChange = (event) => {
        const { onFieldChange } = this.props;

        const {
            target: {
                name,
                value
            }
        } = event;

        this.setState({ [name]: value });

        onFieldChange(
            name,
            value
        );
    };

    onFormSubmit = () => {
        const { onFormSubmit } = this.props;
        const { fieldValues } = this.state;
        onFormSubmit(fieldValues);
    };

    getFieldValueByName(name) {
        const {
            fieldValues: {
                [name]: value
            }
        } = this.state;

        return value;
    }

    renderUnknownField() {
        return 'unknown field type';
    }

    renderField = (fieldData) => {
        const {
            type,
            inputProps,
            fieldProps = {}
        } = fieldData;

        const Component = this.componentTypeMap[type];

        if (!Component) {
            return this.renderUnknownField();
        }

        return (
            <Field { ...fieldProps }>
                <Component
                  onChange={ this.onFieldChange }
                  value={ this.getFieldValueByName(inputProps.name) }
                  { ...inputProps }
                />
            </Field>
        );
    };

    _renderField = ([key, { item }]) => (
        <Fragment key={ key }>
            { this.renderField(item) }
        </Fragment>
    );

    renderFields() {
        const { renderFields } = this.props;

        if (renderFields) {
            return renderFields(this.fields, this._renderField);
        }

        return Array.from(this.fields.entries(), this._renderField);
    }

    render() {
        return (
            <form onSubmit={ this.onFormSubmit }>
                { this.renderFields() }
            </form>
        );
    }
}

export default AbstractFormComponent;
