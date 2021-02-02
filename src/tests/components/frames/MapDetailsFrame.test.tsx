import * as React from 'react';
// import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import MapDetailsFrame from '../../../components/frames/MapDetailsFrame';

describe('Map Details Frame', () => {
    it('renders Correctly', () => {

        const actions = {
            next: jest.fn(),
            prev: jest.fn(),
            back: jest.fn(),
            goToDetails: jest.fn(),
            goToList: jest.fn(),
        }
        
        const { toJSON } = render(<MapDetailsFrame 
                subjectContainer={''}
                tabs={''}
                list={''}
                actions={actions}
            />
        );
        expect(toJSON()).toMatchSnapshot();    
    });
});