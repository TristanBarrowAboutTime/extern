import React from 'react';
import renderer from 'react-test-renderer';
import WMButton, { ButtonType } from '../../../components/atomic-components/WMButton';
import 'jest-styled-components';
import WMStyles from '../../../style/WMStyles';

/*
 * for now snapshot testing should be sufficiant. 
 * it would be good to include click testing and className testing.
*/
describe('WMButton', () => {

    /**
     * Base
     */
    test('that button displays with minimal props', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
        expect(tree).toHaveStyleRule('background-color', WMStyles.color.green);

    });

    /**
     * Normal
     */
    test('Normal buttons match snapshots', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NORMAL}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
    test('Normal buttons display disabled', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NORMAL}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });


    /**
     * Green
     */
    test('Green buttons match snapshots', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.GREEN}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
    test('Green buttons display disabled', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.GREEN}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });

    /**
     * Red
     */
    test('Red buttons match snapshots', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.RED}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
    test('Red buttons display disabled', () => {
        const tree = renderer.create(
            <WMButton
                text='Button'
                buttonType={ButtonType.RED}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
    
    /**
     * Naked
     */
    test('Naked buttons match snapshots', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NAKED}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
    test('Naked buttons display disabled', () => {
        const tree = renderer.create(
            <WMButton 
                text='Button'
                buttonType={ButtonType.NAKED}
                disabled={true}
                onClick={()=>{}}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});
