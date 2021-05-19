/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */

import { PureComponent } from 'react';

export interface BreadcrumbItem {
    label: string
    href?: string
    onClick?: () => void
}

export interface BreadcrumbProps {
    breadcrumbs: BreadcrumbItem[]
}

export class Breadcrumb extends PureComponent<BreadcrumbProps> {}

export default Breadcrumb;
