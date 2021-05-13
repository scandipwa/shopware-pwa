import { PureComponent, ReactNode } from 'react';

export interface ThemeProviderProps {
    children: ReactNode
}

export class ThemeProvider extends PureComponent<ThemeProviderProps> {}

export default ThemeProvider;
