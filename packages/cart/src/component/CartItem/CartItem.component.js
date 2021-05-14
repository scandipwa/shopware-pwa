import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { CartItemType } from '../../type/Cart.type';
import Price from '../Price';
import RemoveFromCart from '../RemoveFromCart';

/** @namespace Cart/Component/CartItem/Component/CartItemComponent */
export class CartItemComponent extends PureComponent {
    static propTypes = {
        item: CartItemType.isRequired,
        updateItemQuantity: PropTypes.func.isRequired
    };

    content = createSortedRenderMap([
        this.renderThumbnail.bind(this),
        this.renderName.bind(this),
        this.renderUnitPrice.bind(this),
        this.renderQuantity.bind(this),
        this.renderSubtotal.bind(this),
        this.renderRemoveFromCart.bind(this)
    ]);

    renderThumbnail() {
        const {
            item: {
                cover: {
                    thumbnails
                },
                label
            }
        } = this.props;

        const thumbnail = thumbnails.sort((a, b) => a.width < b.width).pop();

        const { url } = thumbnail;

        return (
            <img src={ url } alt={ label } />
        );
    }

    renderName() {
        const { item: { label } } = this.props;

        return <h3>{ label }</h3>;
    }

    renderQuantity() {
        const {
            updateItemQuantity,
            item: { quantity },
            item
        } = this.props;

        return (
            <div>
                { /* eslint-disable-next-line react/jsx-no-bind */ }
                <button onClick={ () => updateItemQuantity(item, quantity + 1) }>+</button>
                <input
                  type="number"
                  value={ quantity }
                  readOnly
                />
                { /* eslint-disable-next-line react/jsx-no-bind */ }
                <button onClick={ () => updateItemQuantity(item, quantity - 1) }>-</button>
            </div>
        );
    }

    renderUnitPrice() {
        const { item: { price: { unitPrice } } } = this.props;

        return (
            <Price amount={ unitPrice } />
        );
    }

    renderSubtotal() {
        const {
            item: { price: { totalPrice } }
        } = this.props;

        return (
            <Price amount={ totalPrice } />
        );
    }

    renderRemoveFromCart() {
        const { item } = this.props;

        return (
            <RemoveFromCart item={ item } />
        );
    }

    render() {
        return (
            <div className="CartItem">
                { this.content.render() }
            </div>
        );
    }
}

export default CartItemComponent;