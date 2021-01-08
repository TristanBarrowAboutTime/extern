import * as React from 'react';
import { View } from 'react-native';

export enum MapEmployeeStatus {
    CLOCKED_IN,
    CLOCKED_OUT,
    UNKNOWN
}

export type MapEmployee = {
    code: number
    firstName: string
    lastName: string
    time: string
    geoDiscrepancy: boolean
    address: string 
    image: null | string
}

const EmployeeListTemplate = () => {
    return (
        <View>
            hello
        </View>
    )
}

export default EmployeeListTemplate;