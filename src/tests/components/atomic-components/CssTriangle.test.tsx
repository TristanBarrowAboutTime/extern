import React from 'react';
import renderer from 'react-test-renderer';
import { Up, Right, Down, Left } from '../../../components/atomic-components/CssTriangle';
import 'jest-styled-components';
import { unmountComponentAtNode } from 'react-dom';

let container: Element | DocumentFragment | null  = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container as Element | DocumentFragment);
    container = container as Element;
    if (container !== null) container.remove();
    container = null;

});

describe('CssTriangle Up', () => {
    it('gets clicked', () => {
        const mockFn = jest.fn();
        const component = renderer.create(
            <Up onClick={mockFn} />
        );
        component.root.findAllByType('div')[0].props.onClick();
        expect(mockFn).toHaveBeenCalled();
    });

    it('to match snapshot with no parameters', () => {
        const component = renderer.create(<Up />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with color modified', () => {
        const component = renderer.create(<Up color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size modified', () => {
        const component = renderer.create(<Up size={10} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size and color modified', () => {
        const component = renderer.create(<Up size={10} color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

});

describe('CssTriangle Right', () => {
    it('gets clicked', () => {
        const mockFn = jest.fn();
        const component = renderer.create(
            <Right onClick={mockFn} />
        );
        component.root.findAllByType('div')[0].props.onClick();
        expect(mockFn).toHaveBeenCalled();
    });

    it('to match snapshot with no parameters', () => {
        const component = renderer.create(<Right />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with color modified', () => {
        const component = renderer.create(<Right color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });
    
    it('to match snapshot with size modified', () => {
        const component = renderer.create(<Right size={10} />).toJSON();
        expect(component).toMatchSnapshot();
    });
    
    it('to match snapshot with size and color modified', () => {
        const component = renderer.create(<Right size={10} color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

});

describe('CssTriangle Down', () => {
    it('gets clicked', () => {
        const mockFn = jest.fn();
        const component = renderer.create(
            <Down onClick={mockFn} />
        );
        component.root.findAllByType('div')[0].props.onClick();
        expect(mockFn).toHaveBeenCalled();
    });

    it('to match snapshot with no parameters', () => {
        const component = renderer.create(<Down />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with color modified', () => {
        const component = renderer.create(<Down color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size modified', () => {
        const component = renderer.create(<Down size={10} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size and color modified', () => {
        const component = renderer.create(<Down size={10} color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

});

describe('CssTriangle Left', () => {
    it('gets clicked', () => {
        const mockFn = jest.fn();
        const component = renderer.create(
            <Left onClick={mockFn} />
        );
        component.root.findAllByType('div')[0].props.onClick();
        expect(mockFn).toHaveBeenCalled();
    });

    it('to match snapshot with no parameters', () => {
        const component = renderer.create(<Left />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with color modified', () => {
        const component = renderer.create(<Left color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size modified', () => {
        const component = renderer.create(<Left size={10} />).toJSON();
        expect(component).toMatchSnapshot();
    });

    it('to match snapshot with size and color modified', () => {
        const component = renderer.create(<Left size={10} color={'#abcdef'} />).toJSON();
        expect(component).toMatchSnapshot();
    });

});