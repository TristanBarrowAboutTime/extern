import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { render } from '@testing-library/react';
import WMButton, { ButtonType } from '../../../components/atomic-components/WMButton';

/*
 * for now snapshot testing should be sufficiant. 
 * it would be good to include click testing and className testing.
*/
describe('WMButton', () => {

    /**
     * Base
     */
    test('that button displays with minimal props', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                onClick={()=>{}}
            />
        );
        const sheets = new SheetsRegistry();
        expect(container).toMatchSnapshot();
        expect(container.className).toMatch(/normal-button/);
    });

    /**
     * Normal
     */
    test('Normal buttons match snapshots', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NORMAL}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
    test('Normal buttons display disabled', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NORMAL}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });


    /**
     * Green
     */
    test('Green buttons match snapshots', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.GREEN}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
    test('Green buttons display disabled', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.GREEN}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });

    /**
     * Red
     */
    test('Red buttons match snapshots', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.RED}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
    test('Red buttons display disabled', () => {
        const {container} = render(
            <WMButton
                text='Button'
                buttonType={ButtonType.RED}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
    
    /**
     * Naked
     */
    test('Naked buttons match snapshots', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NAKED}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
    test('Naked buttons display disabled', () => {
        const {container} = render(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NAKED}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
