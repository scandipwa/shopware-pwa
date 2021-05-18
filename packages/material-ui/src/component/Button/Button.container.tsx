import Button, { ButtonProps as MButtonProps } from '@material-ui/core/Button';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { ButtonProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Button/Container/ButtonContainer */
export class ButtonContainer extends PureComponent<
    ButtonProps & { type: 'icon' }
> {
    static defaultProps: Required<ButtonProps> = {
        onClick: () => {},
        isPrimary: true,
        isDisabled: false,
        type: 'contained',
        to: ''
    };

    containerFunctions = {};

    containerProps = (): MButtonProps & { to?: string } | IconButtonProps => {
        const {
            children,
            isPrimary,
            isDisabled,
            onClick,
            to
        } = this.props;

        const props: MButtonProps & { to?: string } = {
            children,
            // Force contained buttons by default, allow outlined
            // https://material-ui.com/components/buttons/#contained-buttons
            // https://material-ui.com/components/buttons/#outlined-buttons
            variant: this.getType()
        };

        if (!isDisabled) {
            // Apply link / onClick behavior only on enabled buttons
            if (to) {
                props.to = to;
            }

            props.onClick = onClick;
        } else {
            props.disabled = true;
        }

        if (isPrimary) {
            props.color = 'primary';
        }

        return props;
    };

    getType(): MButtonProps['variant'] {
        const { type } = this.props;

        if (type === 'icon') {
            return undefined;
        }

        return type;
    }

    render(): JSX.Element {
        const { type } = this.props;

        if (type === 'icon') {
            return (
                <IconButton
                  className={ `Button Button_${ type }` }
                  { ...(this.containerProps() as IconButtonProps) }
                  { ...this.containerFunctions }
                />
            );
        }

        return (
            <Button
              className={ `Button Button_${ type }` }
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ButtonContainer;
