import * as React from 'react';

export enum AssetRecordType {
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
            type: AssetRecordType.TIME_RECORD,
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {
            type: AssetRecordType.TIME_RECORD,
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {
            type: AssetRecordType.TIME_RECORD,
            timeIn: '8:05am',
            timeOut: '11:56am',
            assetName: 'SP-WM-07 Miller Big Blue 450 Duo',
            location: '00006709 UFA Co-operative Limited',
            costCode: '100300.00 Full Service',
        },
        {  
            type: AssetRecordType.ASSIGNMENT,
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