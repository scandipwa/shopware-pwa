import Chip, { ChipProps as MaterialChipProps } from '@material-ui/core/Chip';
import { ChipProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Chip/Container/ChipContainer */
export class ChipContainer extends PureComponent<ChipProps> {
    static defaultProps = {
        isPrimary: false
    };

    containerFunctions = {};

    // eslint-disable-next-line max-len
    containerProps = (): MaterialChipProps => {
        const {
            onClick,
            label
        } = this.props;

        return {
            onDelete: onClick,
            label
        };
    };

    render(): JSX.Element {
        return (
            <Chip
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ChipContainer;
