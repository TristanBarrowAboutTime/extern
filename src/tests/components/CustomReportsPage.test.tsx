import React from 'react';
import renderer from 'react-test-renderer';
import CustomReportsPage from '../../components/CustomReportsPage';

// just a place holder
describe('Custom Reports Page', () => {
    it('renders Correctly', () => {
        const component = renderer.create(
            <CustomReportsPage />
        ).toJSON();
        expect(component).toMatchSnapshot();

    })
})