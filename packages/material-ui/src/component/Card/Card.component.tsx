import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { CardProps } from '@virtual-module/ui';
import { Fragment, PureComponent } from 'react';

/** @namespace Materialui/Component/Card/Component/CardComponent */
export class CardComponent extends PureComponent<CardProps> {
    static defaultProps = {
        onClick: (): void => {},
        actions: []
    };

    renderCover(): React.ReactNode {
        const { cover } = this.props;

        if (!cover) {
            return null;
        }

        return (
            <CardMedia>
                { cover }
            </CardMedia>
        );
    }

    renderChildren(): React.ReactNode {
        const { children } = this.props;

        if (!children) {
            return null;
        }

        return (
            <CardContent>
                { children }
            </CardContent>
        );
    }

    renderContent(): React.ReactNode {
        return (
            <>
                { this.renderCover() }
                { this.renderChildren() }
            </>
        );
    }

    renderAction = (action: React.ReactNode, i: number): React.ReactNode => (
        <Fragment key={ i }>
            { action }
        </Fragment>
    );

    renderActions(): React.ReactNode {
        const { actions } = this.props;

        if (!actions.length) {
            return null;
        }

        return (
            <CardActions>
                { actions.map(this.renderAction) }
            </CardActions>
        );
    }

    render(): JSX.Element {
        const { onClick } = this.props;

        return (
            <Card>
                <CardActionArea onClick={ onClick }>
                    { this.renderContent() }
                </CardActionArea>
            </Card>
        );
    }
}

export default CardComponent;
