import { Pagination } from '@virtual-module/ui';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Product/Component/Pagination/Component/PaginationComponent */
export class PaginationComponent extends PureComponent {
    static propTypes = {
        total: PropTypes.number.isRequired,
        current: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    };

    renderContent() {
        const {
            total,
            current,
            onChange
        } = this.props;

        return (
            <Pagination
              total={ total }
              current={ current }
              onChange={ onChange }
            />
        );
    }

    render() {
        return this.renderContent();
    }
}

export default PaginationComponent;
