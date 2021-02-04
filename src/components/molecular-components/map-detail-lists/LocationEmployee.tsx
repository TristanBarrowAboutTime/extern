import * as React from 'react';
import styled from 'styled-components/native';
import SortableList from '../../frames/SortableList';
import LocationEmployeeListTemplate from '../templates/LocationEmployeeListTemplate';
import { MapEmployeeStatus } from '../../atomic-components/UserImage';
import { useLocationEmployeeData } from '../../../hooks/loadable-data/live-maps/controller/locations/useLocationEmployeeData';

export type LocationEmployeeRecord = {
    code: number
    firstName: string
    lastName: string
    image: null | string
    address: string
    time: string
    status: MapEmployeeStatus
}

type LocationEmployeeProps = {
    filterValue: string
}

const LocationEmployee = (props: LocationEmployeeProps) => {
    const value = props.filterValue.toLowerCase();
    const locationEmployeeRecords =  useLocationEmployeeData();

    const showItem = (item: LocationEmployeeRecord) => {
        if (item.firstName.toLowerCase().includes(value) ||
        item.lastName.toLowerCase().includes(value) ||
        item.address.toLowerCase().includes(value)){
            return true
        }
        return false
    }
    return (
        <>
            <SortableList
                data={locationEmployeeRecords}              
                template={(employee: LocationEmployeeRecord) => {
                    return (
                        <LocationEmployeeListTemplate
                            employee={employee}                          
                        />
                    );
                }}
                sortables={{
                    code: { title: 'Code', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.code > b.code ? -1 : 1) },
                    firstName: { title: 'First', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.firstName > b.firstName ? -1 : 1) },
                    lastName: { title: 'Last', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.lastName > b.lastName ? -1 : 1) },
                    status: { title: 'Site Status', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.status > b.status ? -1 : 1) },
                }}
                shouldDisplayItem={(item: LocationEmployeeRecord) => showItem(item)}
            />
        </>
    )

}

export default LocationEmployee;
