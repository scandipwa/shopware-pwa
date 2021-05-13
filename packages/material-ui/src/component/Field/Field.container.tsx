import { FieldProps, AllowedChildrenType } from '@virtual-module/ui';
import { Children, PureComponent } from 'react';

import { InputCheckboxContainer } from '../InputCheckbox/InputCheckbox.container';
import { InputRadioContainer } from '../InputRadio/InputRadio.container';
import { InputSelectContainer } from '../InputSelect/InputSelect.container';
import { InputTextContainer } from '../InputText/InputText.container';
import Field from './Field.component';

/** @namespace Materialui/Component/Field/Container/FieldContainer */
export class FieldContainer extends PureComponent<FieldProps> {
    static defaultProps = {
        onChange: () => {}
    };

    containerFunctions = {};

    containerProps = (): FieldProps & { type: AllowedChildrenType } => {
        const {
            children,
            message,
            label
        } = this.props;

        return {
            type: this.getType(),
            children,
            message,
            label
        };
    };

    getTypeFromChild(child: any): AllowedChildrenType {
        if (typeof child.type === 'string') {
            return 'unknown';
        }

        const { name: type } = child.type || {};

        switch (type) {
        case InputSelectContainer.prototype.constructor.name:
            return 'select';
        case InputTextContainer.prototype.constructor.name:
            return 'text';
        case InputCheckboxContainer.prototype.constructor.name:
            return 'checkbox';
        case InputRadioContainer.prototype.constructor.name:
            return 'radio';
        default:
            return 'unknown';
        }
    }

    getType(): AllowedChildrenType {
        const { children } = this.props;
        const childrenArr = Children.toArray(children);
        const type = this.getTypeFromChild(childrenArr[0]);

        // eslint-disable-next-line fp/no-let
        for (let i = 1; i < childrenArr.length; i++) {
            const child = childrenArr[i];

            if (this.getTypeFromChild(child) !== type) {
                return 'unknown';
            }
        }

        return type;
    }

    render(): JSX.Element {
        return (
            <Field
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default FieldContainer;
