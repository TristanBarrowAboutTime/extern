import * as React from 'react';

export type AssetMapControllerData = {
    assetsCode: string
    assetsFirstName: string
    assetsLastName: string
    employeeCode: number
    employeeFirstName: string
    employeeLastName: string
    location: string
    image: null | string
}

export const useMapAssetsData = (): AssetMapControllerData[] => {
    return [
        {
            assetsCode: 'SP-WM-07',
            assetsFirstName: 'Miller',
            assetsLastName: 'Big Blue',
            employeeCode: 1002,
            employeeFirstName: 'Joseph',
            employeeLastName: 'Carrigan',
            location: '1345 Erda Water',
            image: null
        },
        {
            assetsCode: 'SP-DRH-1118',
            assetsFirstName: 'JACK',
            assetsLastName: 'HYDROLIC',
            employeeCode: 1004,
            employeeFirstName: 'Roshni',
            employeeLastName: 'Raval',
            location: '',
            image: null
        },
        {
            assetsCode: 'SP-DRH-2000',
            assetsFirstName: 'JACK',
            assetsLastName: 'HYDROLIC',
            employeeCode: 1008,
            employeeFirstName: 'Joseph ',
            employeeLastName: 'Peters',
            location: '',
            image: null
        }
    ] as AssetMapControllerData[]; 
}

const HookConsumer = (props: { display: (binding: AssetMapControllerData[]) => React.ReactNode }) => {
    const binding = useMapAssetsData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;