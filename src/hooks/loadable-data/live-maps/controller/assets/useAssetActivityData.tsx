import * as React from 'react';

export type AssetActivityRecord = {
    assetsCode: string
    location: string
    employee: string
    status: string
}

export const useAssetActivityData = (): AssetActivityRecord[] => {
    return [
        {
            assetsCode: 'SP-WM-07',
            status: 'assignment',
            location: '1345 Erda Water',
            employee: '1002 Joseph Carrigan'
        },
        {
            assetsCode: 'SP-WM-2007',
            status: 'time record',
            location: '1005 Payson Utah',
            employee: '1002 Joseph Carrigan'
        },
        {
            assetsCode: 'SP-DRH-1118',
            status: 'time record',
            location: '',
            employee: '1002 Joseph Carrigan'
        }
    ] as AssetActivityRecord[]; 
}

const HookConsumer = (props: { display: (binding: AssetActivityRecord[]) => React.ReactNode }) => {
    const binding = useAssetActivityData();
    return <>{props.display(binding)}</>;
}

export default HookConsumer;