import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { renderHook, act } from '@testing-library/react-hooks';
import Map, { useWithMap, Viewport, MapActions, BaseMap } from '../../../../components/cellular-components/map/Map';

let viewport: Viewport | null = null;
let actions: MapActions | null = null;

beforeEach(() => {
    viewport = {
        latitude: 1,
        longitude: 55,
        zoom: 10,
        bearing: 0,
        pitch: 0,
        transitionDuration: 500, 
        ref: null,
        height: '100%',
        width: '100%',
        mapStyle: BaseMap.BASIC,
        onViewportChange: jest.fn(),
        transitionEasing: jest.fn()
    }

    actions = {
        setCords: jest.fn(),
        setZoom: jest.fn(),
        incZoom: jest.fn(),
        decZoom: jest.fn(),
        setToStreet: jest.fn(),
        setToSatellite: jest.fn(),
    }
});

afterEach(() => {
    viewport = null;
    actions = null;
});




describe('Map', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <Map 
                viewport={viewport as Viewport}
                actions={actions as MapActions}
                mapConfigs={[]}
            />
        ).toJSON();   
        expect(tree).toMatchSnapshot();    
    });
});



describe('Use With Map', () => {
    it('exists', () => {
        const { result } = renderHook(() => useWithMap({}));
        expect(result.current.viewport.latitude).toBeTruthy(); 
        expect(result.current.viewport.longitude).toBeTruthy(); 
        expect(result.current.viewport.zoom).toBeGreaterThan(0); 
        expect(result.current.viewport.bearing).toBe(0); 
        expect(result.current.viewport.pitch).toBe(0); 
        expect(result.current.viewport.transitionDuration).not.toBeUndefined(); 
        expect(result.current.viewport.transitionEasing).toBeTruthy();
    });
    it('Increments Zoom', () => {
        const { result } = renderHook(() => useWithMap({
            minZoom: 2,
            maxZoom: 8,
            initialZoom: 5,
        }));
        const zoom = result.current.viewport.zoom;

        act(() => {
            result.current.actions.incZoom();
        });
        expect 
    })
});