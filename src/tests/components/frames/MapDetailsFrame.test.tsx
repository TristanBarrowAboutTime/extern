import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MapDetailsFrame from '../../../components/frames/MapDetailsFrame';

describe('Map Details Frame', () => {
    it('renders Correctly', () => {

        const actions = {
            goToNext: jest.fn(),
            goToPrev: jest.fn(),
            back: jest.fn()
        }

        const tree = renderer.create(
            <MapDetailsFrame 
                subjectContainer = {<div>subject container</div>}
                tabs = {<div> tabs</div>}
                list = {<div> list</div>}
                goToNext = {actions.goToNext}
                goToPrev =  {actions.goToPrev}
                back = {actions.back}
            />
        ).toJSON();   
        expect(tree).toMatchSnapshot();    
    });
});