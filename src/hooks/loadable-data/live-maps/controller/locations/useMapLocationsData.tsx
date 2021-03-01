import * as React from 'react';

export type LocationMapControllerData = {
    locationCode: number
    locationFirstName: string
    locationLastName: string
    jobAddress: string
}

export const useMapLocationsData = () => {
    return [
        {
            locationCode: 1345,
            locationFirstName: 'Erda',
            locationLastName: 'Water',
            jobAddress: '8740 UT-36, Lake Point, UT 84074'
        },
        {
            locationCode: 1447,
            locationFirstName: 'Toelle',
            locationLastName: 'Water',
            jobAddress: '1531 N Main St, Tooele, UT 84074'
        },
        {
            locationCode: 8765,
            locationFirstName: 'Jordan',
            locationLastName: 'Water',
            jobAddress: '8740 UT-36, Lake Point, UT 84074'
        },
        {
            locationCode: 667,
            locationFirstName: 'Valley',
            locationLastName: 'Water',
            jobAddress: '8740 UT-36, Lake Point, UT 84074'
        },
        
    ] as LocationMapControllerData[]; 
}

// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: LocationMapControllerData[]) => React.ReactNode }) => {
    const binding = useMapLocationsData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;