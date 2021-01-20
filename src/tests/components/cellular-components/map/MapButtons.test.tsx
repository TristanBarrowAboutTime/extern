import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';
import MapButtons from '../../../../components/cellular-components/map/MapButtons';


describe('Map Buttons', () => {
    it('renders Correctly', () => {
        const tree = renderer.create(
            <div>Generic Test</div>
        ).toJSON();   
        expect(tree).toMatchSnapshot();    
    });
});
