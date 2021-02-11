import * as React from 'react';

export type LocationFormRecord = {
    formList: string;
    employee: string;
    time: string;
}


export const useLocationFormData = () => {
    return [
        {
            formList: 'Missing Hours',
            employee: 'Joseph Carrigan',
            time: '1:11 pm'
        },
        {
            formList: 'PTO',
            employee: 'Joseph Carrigan',
            time: '8:05 am'
        },
    ] as LocationFormRecord[]; 
}


// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: LocationFormRecord[]) => React.ReactNode }) => {
    const binding = useLocationFormData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;