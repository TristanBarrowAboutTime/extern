import * as React from 'react';

type EmployeeLocationMapControllerData = {
    timeIn: string
    timeOut: string | null
    location: string
    jobType: string
}

export const useEmployeeLocationData = (): EmployeeLocationMapControllerData[] => {
    return [
        {
            timeIn: '8:05am',
            timeOut: '11:56am',
            location: '00006709 UFA Co-operative Limited',
            jobType: '100300.00 Full Service'
        },
        {
            timeIn: '8:05am',
            timeOut: '5:56pm',
            location: '00006819 UFA Co-operative Limited',
            jobType: '100300.00 Service'
        },
        {
            timeIn: '8:05am',
            timeOut: null,
            location: '00006819 West ERD (K-Rite)',
            jobType: '100300.00 Signage'
        }
    ]
}


// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: EmployeeLocationMapControllerData[]) => React.ReactNode }) => {
    const binding = useEmployeeLocationData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;