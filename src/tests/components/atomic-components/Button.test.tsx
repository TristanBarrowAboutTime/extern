import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../../components/atomic-components/Button';
import { ButtonType } from '../../../types/ButtonType';
import Style from '../../../style/Styles';
import 'jest-styled-components';
import { unmountComponentAtNode } from 'react-dom';

const style = {
    bgColor: {
        normal: Style.color.gray.xx_dark,
        primary: Style.color.green,
        secondary: Style.color.red,
        bare: Style.color.transparent,
        disabled: Style.color.gray.medium,
    },
    color: {
        normal: Style.color.white,
        primary: Style.color.white,
        secondary: Style.color.white,
        bare: Style.color.gray.xx_dark,
        disabled: Style.color.white,
        bareDisabled: Style.color.gray.dark
    },
    shadow: {
        raised: Style.button.shadow,
        flat: '0',
    },
    size: {
        small: Style.button.paddingSmall,
        normal: Style.button.paddingNormal,
    }

}

const styleNames = {
    bgColor: 'background-color',
    color: 'color',
    padding: 'padding',
    boxShadow: 'box-shadow',
}


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

describe('Button', () => {
    it('gets Clicked when enabled', () => {
        const mockFn = jest.fn();
        const component = renderer.create(
            <Button text={'Get Clicked'} onClick={mockFn} />
        );
        component.root.findAllByType('button')[0].props.onClick();
        expect(mockFn).toHaveBeenCalled();
    });
    
    // done simplest possible
    it('is styled correctly when type is normal and endabled', () => {
        const component = renderer.create(
            <Button text={'Button'} onClick={() => {}}/>
        ).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.normal);
        expect(component).toHaveStyleRule(styleNames.color, style.color.normal);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // done normal enabled
    it('is styled correctly when type is normal and endabled', () => {
        const component = renderer.create(
            <Button 
                buttonType={ButtonType.NORMAL} 
                text={'Button'}
                onClick={() => {}}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.normal);
        expect(component).toHaveStyleRule(styleNames.color, style.color.normal);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // done small-normal enabled
    it('is styled correctly when type is small-normal and enabled', () => {
        const component = renderer.create(
            <Button 
                buttonType={ButtonType.SMALL_NORMAL} 
                text={'Button'}
                onClick={() => {}}
            />
        ).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.normal);
        expect(component).toHaveStyleRule(styleNames.color, style.color.normal);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });
    
    // normal disabled
    it('is styled correctly when type is normal and disabled', () => {
        const component = renderer.create(
            <Button 
                buttonType={ButtonType.NORMAL} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // small-normal disabled
    it('is styled correctly when type is small-normal and disabled', () => {
        const component = renderer.create(
            <Button 
                buttonType={ButtonType.SMALL_NORMAL} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // green enabled
    it('is styled correctly when type is green and enabled', () => {
        const component = renderer.create(
            <Button 
                buttonType={ButtonType.GREEN} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.primary);
        expect(component).toHaveStyleRule(styleNames.color, style.color.primary);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // small-green enabled
    it('is styled correctly when type is small-green and enabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.SMALL_GREEN} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.primary);
        expect(component).toHaveStyleRule(styleNames.color, style.color.primary);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // green disabled
    it('is styled correctly when type is green and disabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.GREEN} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // small-green disabled
    it('is styled correctly when type is small-green disabled', () => {
        const component = renderer.create(
              <Button 
                buttonType={ButtonType.SMALL_GREEN} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // red enabled
    it('is styled correctly when type is red and endabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.RED} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.secondary);
        expect(component).toHaveStyleRule(styleNames.color, style.color.secondary);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // small-red enabled
    it('is styled correctly when type is small-red and enabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.SMALL_RED} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.secondary);
        expect(component).toHaveStyleRule(styleNames.color, style.color.secondary);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.raised);
    });

    // red disabled
    it('is styled correctly when type is red and disabled', () => {
        const component = renderer.create(
              <Button 
                buttonType={ButtonType.RED} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // small-red disabled
    it('is styled correctly when type is small-red and disabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.SMALL_RED} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.disabled);
        expect(component).toHaveStyleRule(styleNames.color, style.color.disabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });
    
    // bare enabled
    it('is styled correctly when type is bare and enabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.BARE} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.bare);
        expect(component).toHaveStyleRule(styleNames.color, style.color.bare);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // small-bare enabled
    it('is styled correctly when type is small-bare and enabled', () => {
        const component = renderer.create(
             <Button 
                buttonType={ButtonType.SMALL_BARE} 
                text={'Button'} 
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.bare);
        expect(component).toHaveStyleRule(styleNames.color, style.color.bare);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });
    
    // bare disabled
    it('is styled correctly when type is bare and disabled', () => {
        const component = renderer.create(
              <Button 
                buttonType={ButtonType.BARE} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.bare);
        expect(component).toHaveStyleRule(styleNames.color, style.color.bareDisabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.normal);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });

    // small-bare disabled
    it('is styled correctly when type is small-bare and disabled', () => {
        const component = renderer.create(
               <Button 
                buttonType={ButtonType.SMALL_BARE} 
                text={'Button'} 
                disabled
                onClick={() => {}}
            />
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(styleNames.bgColor, style.bgColor.bare);
        expect(component).toHaveStyleRule(styleNames.color, style.color.bareDisabled);
        expect(component).toHaveStyleRule(styleNames.padding, style.size.small);
        expect(component).toHaveStyleRule(styleNames.boxShadow, style.shadow.flat);
    });
});
