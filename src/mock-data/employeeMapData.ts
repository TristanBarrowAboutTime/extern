import { GeolocateControl } from 'react-map-gl';
import { MapEmployeeStatus } from '../components/atomic-components/UserImage';
import { ListEmployee } from '../components/molecular-components/templates/EmployeeListTemplate';
import {EmployeeList} from '../components/molecular-components/templates/LocationEmployeeListTemplate';

export const employeeListData: ListEmployee[] = [
    {
        code: 1,
        firstName: 'John',
        lastName: 'Smith',
        time: '9 hrs',
        geoDiscrepancy: true,
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_IN,
        image: null,
    },
    {
        code: 1234,
        firstName: 'Kitly',
        lastName: 'Kitten',
        time: '98 hrs',
        geoDiscrepancy: false,
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_OUT,
        image: null,
    },
    {
        code: 2345,
        firstName: 'George',
        lastName: 'The Man Eater',
        time: '8 hrs',
        geoDiscrepancy: false,
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_IN,
        image: null
    },
    {
        code: 3456,
        firstName: 'Sancheze',
        lastName: 'Gestapo',
        time: '1 hrs',
        geoDiscrepancy: false,
        address: '1234 blah land',
        status: MapEmployeeStatus.UNKNOWN,
        image: null,
    },
    {
        code: 4567,
        firstName: 'Frank',
        lastName: 'the Hell Spawn Slayer',
        time: '5 hrs',
        geoDiscrepancy: false,
        status: MapEmployeeStatus.CLOCKED_OUT,
        address: '1234 blah land',
        image: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    }
]

export const locationEmployeeListData: EmployeeList[] = [
    {
        code: 1,
        firstName: 'John',
        lastName: 'Smith',
        time: '9 hrs',
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_IN,
        image: null,
    },
    {
        code: 1234,
        firstName: 'Kitly',
        lastName: 'Kitten',
        time: '98 hrs',
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_OUT,
        image: null,
    },
    {
        code: 2345,
        firstName: 'George',
        lastName: 'The Man Eater',
        time: '8 hrs',
        address: '1234 blah land',
        status: MapEmployeeStatus.CLOCKED_IN,
        image: null
    },
    {
        code: 3456,
        firstName: 'Sancheze',
        lastName: 'Gestapo',
        time: '1 hrs',
        address: '1234 blah land',
        status: MapEmployeeStatus.UNKNOWN,
        image: null,
    },
    {
        code: 4567,
        firstName: 'Frank',
        lastName: 'the Hell Spawn Slayer',
        time: '5 hrs',
        status: MapEmployeeStatus.CLOCKED_OUT,
        address: '1234 blah land',
        image: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png',
    }
]
export const employeeGeoJson = {
    type: "FeatureCollection",
    crs: { 
        type: "name", 
        properties: { 
            name: "urn:ogc:def:crs:OGC:1.3:CRS84" 
        } 
    },
    features: [
        {
            type: "Feature", 
            geometry: { type: "Point", coordinates: [ -111.634, 39.989] },
            properties: { id:'1', name: 'Bob Roberto'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.845, 39.978] },
            properties: { id:'2', name: 'Dusty Bottoms'}
        }, 
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.743, 39.975] },
            properties: { id:'3', name: 'Carrol Ling'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.756, 39.976] },
            properties: { id:'4', name: 'Mike Rofone'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.791, 39.982] },
            properties: { id:'5', name: 'Rob Urr'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.74, 39.978] },
            properties: { id:'6', name: 'Berry Razz'}
        }
    ]
}
