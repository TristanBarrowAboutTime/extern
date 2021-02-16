import * as React from 'react';

enum AssetRecordType {
    TIME_RECORD = 'TIME_RECORD',
    ASSIGNMENT = 'ASSIGNMENT',
}

export type EmployeeAssetRecord = {
    type: AssetRecordType
    timeIn: string 
    timeOut: string | null
    assetName: string
    location: string
    costCode: string
}

export const useEmployeeAssetData = () => {
    return [
        {
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {
            timeIn: '8:05am',
            timeOut: null, 
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        } 
    ] as EmployeeAssetRecord[];
}

const HookConsumer = (props: { display: (binding: EmployeeAssetRecord[]) => React.ReactNode }) => {
    const binding = useEmployeeAssetData();
    return <>{props.display(binding)}</>;
}


export default HookConsumer;