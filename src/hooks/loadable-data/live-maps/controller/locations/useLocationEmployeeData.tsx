import * as React from 'react';
import { MapEmployeeStatus } from '../../../../../components/atomic-components/UserImage';

type LocationEmployeeRecord = {
    code: number
    firstName: string
    lastName: string
    image: null | string
    address: string
    time: string
    status: MapEmployeeStatus
}

export const useLocationEmployeeData = () => {
    return [
        {
            code: 1,
            firstName: 'Roshni',
            lastName: "Raval",
            status: MapEmployeeStatus.CLOCKED_IN,
            time: '8 hrs',
            address: 'Payson, Utah',
            image: ''
        }, 
        {
            code: 2,
            firstName: 'Scott',
            lastName: "Jenkens",
            status: MapEmployeeStatus.CLOCKED_OUT,
            time: '8 hrs',
            address: '120459 Salt Lake City Water',
            image: ''
        }
    ] as LocationEmployeeRecord[]; 
}


// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: LocationEmployeeRecord[]) => React.ReactNode }) => {
    const binding = useLocationEmployeeData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;