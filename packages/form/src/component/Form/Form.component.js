/* eslint-disable max-lines */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

import PropTypes from 'prop-types';
import {
    Children,
    cloneElement,
    createRef,
    PureComponent
} from 'react';

import { FieldContainer } from 'Component/Field/Field.container';
import { ChildrenType, MixType } from 'Type/Common';
import FormPortalCollector from 'Util/FormPortalCollector';

import validationConfig from './Form.config';

/** @namespace Layout/Form/Component/FormComponent */
export class FormComponent extends PureComponent {
    static propTypes = {
        onSubmitSuccess: PropTypes.func,
        onSubmitError: PropTypes.func,
        onSubmit: PropTypes.func,
        children: ChildrenType.isRequired,
        id: PropTypes.string,
        mix: MixType
    };

    static defaultProps = {
        onSubmitSuccess: () => {},
        onSubmitError: () => {},
        onSubmit: () => {},
        mix: {},
        id: ''
    };

    static updateChildrenRefs(props, state = {}) {
        const { children: propsChildren } = props;
        const { refMap: refMapState = {} } = state;

        const refMap = {};

        const children = FormComponent.cloneChildren(
            propsChildren,
            (child) => {
                const { props: { name } } = child;
                const { message } = Object.keys(refMapState).length
                    ? FormComponent.validateField(child, refMapState)
                    : {};

                refMap[name] = createRef();

                const childProps = {
                    formRef: refMap[name],
                    formRefMap: refMap
                };

                if (message) {
                    childProps.message = message;
                }

                return cloneElement(child, childProps);
            }
        );

        return { children, refMap };
    }

    static cloneChildren(originChildren, fieldCallback) {
        const executeClone = (originChildren) => Children.map(originChildren, (child) => {
            if (child && typeof child === 'object' && child.type && child.props) {
                const { type: { name }, props, props: { children } } = child;

                if (name === FieldContainer.prototype.constructor.name) {
                    return fieldCallback(child);
                }

                if (typeof children === 'object') {
                    return cloneElement(child, {
                        ...props,
                        children: executeClone(children)
                    });
                }

                return child;
            }

            return child;
        });

        return executeClone(originChildren);
    }

    static cloneAndValidateChildren(propsChildren, refMap) {
        const invalidFields = [];
        const children = FormComponent.cloneChildren(
            propsChildren,
            (child) => {
                const { props: { id, name } } = child;
                const { message } = FormComponent.validateField(child, refMap);

                if (message) {
                    invalidFields.push(id);
                    return cloneElement(child, {
                        message,
                        formRef: refMap[name]
                    });
                }

                return cloneElement(child, {
                    formRef: refMap[name]
                });
            }
        );

        return { children, fieldsAreValid: !invalidFields.length, invalidFields };
    }

    static validateField(field, refMap) {
        const { validation, id, name } = field.props;

        if (validation && id && refMap[name] && refMap[name].current) {
            const { current: inputNode } = refMap[name];

            const rule = validation.find((rule) => {
                if (!validationConfig[rule]) {
                    return false;
                }
                const validationRules = validationConfig[rule];
                const isValid = validationRules.validate(inputNode, refMap);
                return !isValid;
            });

            if (rule) {
                return validationConfig[rule];
            }
        }

        return {};
    }

    static getDerivedStateFromProps(props, state) {
        const { refMap } = state;
        const { children } = props;

        return {
            ...FormComponent.cloneAndValidateChildren(children, refMap),
            ...FormComponent.updateChildrenRefs(props, state)
        };
    }

    __construct(props) {
        super.__construct(props);

        if (!window.formPortalCollector) {
            window.formPortalCollector = new FormPortalCollector();
        }

        this.state = {
            ...FormComponent.updateChildrenRefs(props),
            fieldsAreValid: true
        };
    }

    handleFormSubmit = async (e) => {
        const {
            onSubmitSuccess,
            onSubmitError,
            onSubmit,
            id
        } = this.props;

        e.preventDefault();
        onSubmit();

        const portalData = id ? await window.formPortalCollector.collect(id) : [];

        const {
            invalidFields,
            inputValues
        } = portalData.reduce((acc, portalData) => {
            const {
                invalidFields = [],
                inputValues = {}
            } = portalData;

            const {
                invalidFields: initialInvalidFields,
                inputValues: initialInputValues
            } = acc;

            return ({
                invalidFields: [...initialInvalidFields, ...invalidFields],
                inputValues: { ...initialInputValues, ...inputValues }
            });
        }, this.collectFieldsInformation());

        const asyncData = Promise.all(portalData.reduce((acc, { asyncData }) => {
            if (!asyncData) {
                return acc;
            }

            return [...acc, asyncData];
        }, []));

        asyncData.then(
            /** @namespace Layout/Form/Component/then */
            (asyncDataList) => {
                if (!invalidFields.length) {
                    onSubmitSuccess(inputValues, asyncDataList);
                    return;
                }

                onSubmitError(inputValues, invalidFields);
            },
            /** @namespace Layout/Form/Component/then */
            (e) => onSubmitError(inputValues, invalidFields, e)
        );
    };

    collectFieldsInformation = () => {
        const { refMap } = this.state;
        const { children: propsChildren } = this.props;

        const {
            children,
            fieldsAreValid,
            invalidFields
        } = FormComponent.cloneAndValidateChildren(propsChildren, refMap);

        this.setState({ children, fieldsAreValid });

        const inputValues = Object.values(refMap).reduce((inputValues, input) => {
            const { current } = input;
            if (current && current.id && current.value) {
                const { name, value, checked } = current;

                if (current.dataset.skipValue === 'true') {
                    return inputValues;
                }

                if (current.type === 'checkbox') {
                    const boolValue = checked;
                    return { ...inputValues, [name]: boolValue };
                }

                return { ...inputValues, [name]: value };
            }

            return inputValues;
        }, {});

        if (invalidFields.length) {
            const { current } = refMap[invalidFields[0]];

            current.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }

        return {
            inputValues,
            invalidFields
        };
    };

    render() {
        const { mix, id } = this.props;
        const { children, fieldsAreValid } = this.state;

        return (
            <form
              block="Form"
              mix={ mix }
              mods={ { isInvalid: !fieldsAreValid } }
              ref={ (ref) => {
                  this.form = ref;
              } }
              id={ id }
              onSubmit={ this.handleFormSubmit }
            >
                { children }
            </form>
        );
    }
}

export default FormComponent;
