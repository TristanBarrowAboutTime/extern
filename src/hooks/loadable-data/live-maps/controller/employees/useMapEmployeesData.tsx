import * as React from 'react';
import { MapEmployeeStatus } from '../../../../../types/MapEmployeeStatus';

type EmployeeMapControllerData = {
    code: number
    firstName: string
    lastName: string
    time: string
    geoDiscrepancy: boolean
    address: string 
    status: MapEmployeeStatus
    image: null | string
}


export const useMapEmployeesData = (): EmployeeMapControllerData[] => {
    return [
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
            image: null,
        }
    ]
    
}


// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: {}) => React.ReactNode }) => {
    const binding = useMapEmployeesData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;