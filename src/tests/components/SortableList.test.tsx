import * as React from 'react';
import * as renderer from 'react-test-renderer';
import SortableList from '../../components/molecular-components/SortableList';

type T = {
    test: string
}

describe('Sortable List', () => {
    it('should render', () => {
        const component = renderer.create(
            <SortableList 
                data={[{ test: 'hi'}, { test: 'hi' }]}
                template={item => <div>{item}</div>}
                sortables={{
                    code: { title: 'Code', sort: (a: T, b: T) => (a.test > b.test ? -1 : 1) },
                }}
                shouldDisplayItem={(item: T) => true}
            />
        )
        expect(component).toMatchSnapshot();
    });
});