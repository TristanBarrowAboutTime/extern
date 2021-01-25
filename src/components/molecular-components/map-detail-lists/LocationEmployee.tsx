import * as React from 'react';
import styled from 'styled-components/native';
import SortableList from '../../frames/SortableList';
import LocationEmployeeListTemplate from '../templates/LocationEmployeeListTemplate';
import { MapEmployeeStatus } from '../../atomic-components/UserImage';
import { locationEmployeeData } from '../../../mock-data/map-details/locationListData';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding: 20px;
`;

const Employee = styled.View`
`;

const Site = styled.View`
`;

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
    locationEmployeeRecord: LocationEmployeeRecord[]
    filterValue: string
}

const LocationEmployee = (props: LocationEmployeeProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
            <SortableList
                data={locationEmployeeData}
                template={(employee: LocationEmployeeRecord) => {
                    return (
                        <LocationEmployeeListTemplate
                            employee={employee}
                        />
                    )
                }}
                sortables={{
                    code: { title: 'Code', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.code > b.code ? -1 : 1) },
                    firstName: { title: 'First', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.firstName > b.firstName ? -1 : 1) },
                    lastName: { title: 'Last', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.lastName > b.lastName ? -1 : 1) },
                    siteStatus: { title: 'Site Status', sort: (a: LocationEmployeeRecord, b: LocationEmployeeRecord) => (a.status > b.status ? -1 : 1) },

                }}
                shouldDisplayItem={(item: LocationEmployeeRecord) => true}
            />
            {props.locationEmployeeRecord.map((item) => {
                if (item.firstName.toLowerCase().includes(value) ||
                    item.lastName.toLowerCase().includes(value) ||
                    item.address.toLowerCase().includes(value)) {
                    return (
                        <Container>
                            <Employee>
                                {item.firstName}{item.lastName}
                            </Employee>
                            <Site>
                                {item.address}
                            </Site>

                        </Container>
                    )
                }
            })}
        </>
    )

}

export default LocationEmployee;
