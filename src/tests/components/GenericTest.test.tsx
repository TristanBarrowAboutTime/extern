import * as React from 'react';
import * as renderer from 'react-test-renderer';

describe('Edit Folder Row', () => {
    it('renders Correctly', () => {
        const tree = renderer.create(
            <div>Generic Test</div>
        ).toJSON();   
        expect(tree).toMatchSnapshot();    
    });
});