import * as React from 'react';

export type LocationMapControllerData = {
    locationCode: number
    locationFirstName: string
    locationLastName: string
    jobAddress: string
}

export const useMapLocationsData = () => {
    return [] as LocationMapControllerData[]; 
}

// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: LocationMapControllerData[]) => React.ReactNode }) => {
    const binding = useMapLocationsData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;