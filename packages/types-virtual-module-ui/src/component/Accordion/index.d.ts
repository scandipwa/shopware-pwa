import { PureComponent, ReactNode } from 'react';

export interface AccordionProps {
    details: ReactNode | string
    summary: ReactNode | string
}

export class Accordion extends PureComponent<AccordionProps> {}

export default Accordion;