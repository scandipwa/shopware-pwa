import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import { AllowedChildrenType, FieldProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Field/Component/FieldComponent */
export class FieldComponent extends PureComponent<FieldProps & { type: AllowedChildrenType }> {
    renderInput(): React.ReactNode {
        const { children, type } = this.props;

        if (type === 'checkbox') {
            return (
                <FormGroup>
                    { children }
                </FormGroup>
            );
        }

        if (type === 'radio') {
            return (
                <RadioGroup>
                    { children }
                </RadioGroup>
            );
        }

        return children;
    }

    renderMessage(): JSX.Element {
        const { message } = this.props;

        if (!message) {
            return null;
        }

        return (
            <FormHelperText>
                { message }
            </FormHelperText>
        );
    }

    renderLabel(): JSX.Element {
        const { label, type } = this.props;

        if (!label) {
            return null;
        }

        if (type === 'checkbox' || type === 'radio') {
            return (
                <FormLabel>
                    { label }
                </FormLabel>
            );
        }

        // TODO: find some way to generate htmlFor

        return (
            <InputLabel shrink={ type === 'select' ? true : undefined }>
                { label }
            </InputLabel>
        );
    }

    render(): JSX.Element {
        const { isError } = this.props;

        return (
            <FormControl
              className="Field"
              error={ isError }
            >
                { this.renderLabel() }
                { this.renderInput() }
                { this.renderMessage() }
            </FormControl>
        );
    }
}

export default FieldComponent;
