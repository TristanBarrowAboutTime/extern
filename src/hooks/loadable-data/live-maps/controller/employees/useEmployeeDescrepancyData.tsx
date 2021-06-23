import * as React from 'react';


type EmployeeDescrepancyMapControllerData = {
    jobLocation: string
    time: string
    isAClockin: boolean
    unitsOutSide: number 
    units: string
    notes: string
}

export const useEmployeeDescrepancyData = (): EmployeeDescrepancyMapControllerData[] => {
    return [
        {
            jobLocation: '00006709 UFA Co-operative Limited',
            time: '8:05 AM',
            isAClockin: true,
            unitsOutSide: 0.5,
            units: 'Miles',
            notes: 'I clocked in at the shop this morning'
        },
        {
            jobLocation: '10000 West ERD (K-Rite)',
            time: '5:35 PM',
            isAClockin: false,
            unitsOutSide: 10.5,
            units: 'Miles',
            notes: 'I forgot to clock out at 5:00, sorry!',
        }
    ];
}

const HookConsumer = (props: { display: (binding: EmployeeDescrepancyMapControllerData[]) => React.ReactNode }) => {
    const binding = useEmployeeDescrepancyData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;