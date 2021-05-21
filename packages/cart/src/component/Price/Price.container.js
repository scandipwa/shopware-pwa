import ShopwareContextContext from '@scandipwa/context/src/context/ShopwareContext/ShopwareContext.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import PriceComponent from './Price.component';

/** @namespace Cart/Component/Price/Container/PriceContainer */
export class PriceContainer extends HigherOrderComponent {
    containerProps = () => {
        const {
            [ShopwareContextContext.displayName]: { currency },
            amount
        } = this.props;

        return { currency, amount };
    };
}

export default withHOC(
    withContexts(PriceContainer, [ShopwareContextContext]),
    PriceComponent
);
