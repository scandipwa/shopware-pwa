import { Link, Typography } from '@material-ui/core';
import MaterialBreadcrumbs from '@material-ui/core/Breadcrumbs';
import { BreadcrumbItem, BreadcrumbProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Breadcrumb/Container/BreadcrumbContainer */
export class BreadcrumbContainer extends PureComponent<BreadcrumbProps> {
    renderBreadCrumb = (breadcrumb: BreadcrumbItem, i: number, array: BreadcrumbItem[]): JSX.Element => {
        const isLastBreadcrumb = i === array.length - 1;
        if (breadcrumb.href) {
            return (
                <Link
                  key={ i }
                  href={ breadcrumb.href }
                  onClick={ breadcrumb.onClick }
                  color={ isLastBreadcrumb ? 'textPrimary' : 'inherit' }
                >
                    { breadcrumb.label }
                </Link>
            );
        }

        return (
            <Typography
              key={ i }
              color={ isLastBreadcrumb ? 'textPrimary' : 'inherit' }
            >
                { breadcrumb.label }
            </Typography>
        );
    };

    renderBreadCrumbs(): JSX.Element[] {
        const { breadcrumbs } = this.props;

        return breadcrumbs.map(this.renderBreadCrumb);
    }

    render(): JSX.Element {
        return (
            <MaterialBreadcrumbs aria-label="breadcrumb">
                { this.renderBreadCrumbs() }
            </MaterialBreadcrumbs>
        );
    }
}

export default BreadcrumbContainer;
