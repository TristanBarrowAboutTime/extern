import * as React from 'react';

export type LocationAssetsRecord = {
    assets: string
    employee: string
    service: string
    time: string
    activity: string
}

export const useLocationAssetData = () => {
    return [
        {
            assets: 'SP-WM-07 Miller Big Blue 450 Duo',
            employee: '1002 Joseph Carrigan',
            service: '100300.00 Full Service',
            time: 'Time on Site: 25 days',
            activity: ' 12:54pm MDT',
        },
        {
            assets: 'SP-WS-02 WALL/FLOOR SCANNER',
            employee: '1002 Joseph Carrigan',
            service: '',
            time: 'Time Assigned to Site: 45 days',
            activity: ' ',
        }
    ] as LocationAssetsRecord[]; 
}


// only use if you need to use MapEmployeeData in a class component. 
const HookConsumer = (props: { display: (binding: LocationAssetsRecord[]) => React.ReactNode }) => {
    const binding = useLocationAssetData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;