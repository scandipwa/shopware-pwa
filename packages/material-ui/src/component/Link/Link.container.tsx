import MaterialLink, { LinkProps as MaterialLinkProps } from '@material-ui/core/Link';
import { LinkProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/Link/Container/LinkContainer */
export class LinkContainer extends PureComponent<LinkProps> {
    static defaultProps = {
        isPrimary: false
    };

    containerFunctions = {};

    containerProps = (): Omit<LinkProps, 'to'> & { color: MaterialLinkProps['color'], href: MaterialLinkProps['href'] } => {
        const {
            children,
            isPrimary,
            to
        } = this.props;

        return {
            color: isPrimary ? 'textPrimary' : 'inherit',
            children,
            href: to
        };
    };

    render(): JSX.Element {
        return (
            <MaterialLink
              className="Link"
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default LinkContainer;
