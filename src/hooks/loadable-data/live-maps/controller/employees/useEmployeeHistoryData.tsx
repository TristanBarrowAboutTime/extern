import * as React from 'react';

export type EmployeeHistoryTimeRecord = {
    id: number
    time: string
    isClockedIn: boolean
    coordinates: { lat: number, long: number }
    accuracy: string
}

export const useEmployeeHistoryData = (): EmployeeHistoryTimeRecord[] => {
    return [
        {
            id: 1,
            time: '',
            isClockedIn: true, 
            coordinates: { lat: 53.23434434513, long: -113.5943823 },
            accuracy: 'High'
        },
        {
            id: 3,
            time: '',
            isClockedIn: true, 
            coordinates: { lat: 53.23434434513, long: -113.5943823 },
            accuracy: 'High'
        },
        {
            id: 5,
            time: '',
            isClockedIn: true, 
            coordinates: { lat: 53.23434434513, long: -113.5943823 },
            accuracy: 'High'
        },
        {
            id: 12,
            time: '',
            isClockedIn: true, 
            coordinates: { lat: 53.23434434513, long: -113.5943823 },
            accuracy: 'High'
        }
    ] as EmployeeHistoryTimeRecord[]; 
}

const HookConsumer = (props: { display: (binding: EmployeeHistoryTimeRecord[]) => React.ReactNode }) => {
    const binding = useEmployeeHistoryData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;