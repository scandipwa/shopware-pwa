import orange from '@material-ui/core/colors/orange';
import { createMuiTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
import { ThemeProviderProps } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace Materialui/Component/ThemeProvider/Container/ThemeProviderContainer */
export class ThemeProviderContainer extends PureComponent<ThemeProviderProps> {
    containerFunctions = {};

    containerProps = (): ThemeProviderProps & { theme: Theme } => {
        const { children } = this.props;

        return {
            children,
            theme: this.getTheme()
        };
    };

    getTheme(): Theme {
        return createMuiTheme({
            palette: {
                primary: {
                    // see more https://www.materialui.co/colors/orange
                    // eslint-disable-next-line no-magic-numbers
                    main: orange[500]
                }
            },
            overrides: {
                MuiFormControl: {
                    root: {
                        minWidth: '250px'
                    }
                }
            }
        });
    }

    render(): JSX.Element {
        return (
            <ThemeProvider
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ThemeProviderContainer;
