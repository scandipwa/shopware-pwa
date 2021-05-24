import ContextContext from '@scandipwa/context/src/context/Context/Context.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import PriceComponent from './Price.component';

/** @namespace Cart/Component/Price/Container/PriceContainer */
export class PriceContainer extends HigherOrderComponent {
    containerProps = () => {
        const {
            [ContextContext.displayName]: { currency },
            amount
        } = this.props;

        return { currency, amount };
    };
}

export default withHOC(
    withContexts(PriceContainer, [ContextContext]),
    PriceComponent
);
