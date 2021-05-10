import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import Footer from '../Footer';
import Header from '../Header';

/** @namespace Sweet/Homepage/Component/Layout/Component/LayoutComponent */
export class LayoutComponent extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    renderContent() {
        return (
            <>
                { this.renderHeader() }
                { this.renderMain() }
                { this.renderFooter() }
            </>
        );
    }

    renderMain() {
        const { children } = this.props;

        return (
            <main>
                { children }
            </main>
        );
    }

    renderHeader() {
        return (
            <Header />
        );
    }

    renderFooter() {
        return (
            <Footer />
        );
    }

    render() {
        return this.renderContent();
    }
}

export default LayoutComponent;
