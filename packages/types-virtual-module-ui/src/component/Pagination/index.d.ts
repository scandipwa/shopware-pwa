/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { ChangeEvent, PureComponent } from 'react';

export interface PaginationProps {
    current: number;
    total: number;
    onChange?: (e: ChangeEvent<unknown>, page: number) => unknown
}

export class Pagination extends PureComponent<PaginationProps> {}

export default Pagination;
