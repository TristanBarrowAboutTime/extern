import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PopoutMenu from '../CustomReportsPage/components/popout-menu/PopoutMenu';

export type PopoutMenuEvent = {
    h: number
    v: number
    close: () => void
}


describe('Search Bar', () => {
    it('Works', () => {
        const props = {
            menuEvent: {
                h: 0,
                v: 0,
                close: jest.fn()
            }
        }

        const component = renderer.create(
            <PopoutMenu {...props} >Popout Contents</PopoutMenu>
        );
        
        

    });   
});