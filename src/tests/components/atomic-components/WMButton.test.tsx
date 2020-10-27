import React from 'react';
import renderer from 'react-test-renderer';
import WMButton, { ButtonType } from '../../../components/atomic-components/WMButton';
import WMStyle from '../../../style/WMStyles';
import 'jest-styled-components';

const colors = WMStyle.color;
const testedStyles = {
    bgColor: 'background-color',
    color: 'color',
    boxShadow: 'box-shadow'
}

describe('WMButton', () => {
    it('is colored dark when type is not specified', () => {
        const component = renderer.create(
            <WMButton text={'Button'} onClick={() => {}}/>
        ).toJSON();
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.gray.xx_dark);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });
    it('is colored dark when type is normal', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.NORMAL} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.gray.xx_dark);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });
    it('is colored green when type is green', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.GREEN} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.green);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });
    it('is small and green when type is small-green', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.SMALL_GREEN} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.green);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });
    it('is colored red when type is red', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.RED} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.red);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });
    it('is red and small when type is small-red', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.RED} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.red);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.white);
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.red);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, WMStyle.button.shadow);
    });



    it('is colored transparent when type is bare', () => {
        const component = renderer.create(
            <WMButton buttonType={ButtonType.BARE} text={'Button'} onClick={() => {}}/>
        ).toJSON()
        expect(component).toMatchSnapshot();
        expect(component).toHaveStyleRule(testedStyles.bgColor, WMStyle.color.transparent);
        expect(component).toHaveStyleRule(testedStyles.color, WMStyle.color.gray.xx_dark);
        expect(component).toHaveStyleRule(testedStyles.boxShadow, '0');
    });
    
});
