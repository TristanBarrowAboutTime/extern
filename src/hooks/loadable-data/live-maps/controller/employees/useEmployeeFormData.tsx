import * as React from 'react';

export type EmployeeFormRecord = {
    time: string
    formName: string
    link: string 
}

export const useEmployeeFormData = (): EmployeeFormRecord[] => {
    return [
        {
            time: '1:11pm',
            formName: 'Missing Hours',
            link: 'none'
        },
        {
            time: '8:05am',
            formName: 'PTO',
            link: 'none'
        }
    ] as EmployeeFormRecord[]; 
}

const HookConsumer = (props: { display: (binding: EmployeeFormRecord[]) => React.ReactNode }) => {
    const binding = useEmployeeFormData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;