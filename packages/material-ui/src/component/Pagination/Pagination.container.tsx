import Pagination, { PaginationProps as MaterialPaginationProps } from '@material-ui/lab/Pagination';
import { PaginationProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Pagination/Container/PaginationContainer */
export class PaginationContainer extends PureComponent<PaginationProps> {
    static defaultProps = {
        isPrimary: false
    };

    containerFunctions = {};

    // eslint-disable-next-line max-len
    containerProps = (): MaterialPaginationProps => {
        const {
            onChange,
            current,
            total
        } = this.props;

        return {
            onChange,
            count: total,
            page: current
        };
    };

    render(): JSX.Element {
        return (
            <Pagination
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default PaginationContainer;
