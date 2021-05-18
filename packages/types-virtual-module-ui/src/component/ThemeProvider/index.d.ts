/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
import { PureComponent, ReactNode } from 'react';

export interface ThemeProviderProps {
    children: ReactNode
}

export class ThemeProvider extends PureComponent<ThemeProviderProps> {}

export default ThemeProvider;
