import React from 'react';
import SortableList from '../components/molecular-components/SortableList';
import { employeeListData } from '../mock-data/employeeMapData';
import MapEmployeeListTemplate, { ListEmployee } from '../components/molecular-components/templates/MapEmployeeListTemplate';

const MapsPage = () => {
    return (
        <div>
            <SortableList
                data={employeeListData}
                sortables={{
                    id: 'Code',
                    firstName: 'First Name', 
                    lastName: 'Last Name'
                }}
                shouldDisplayItem={(item: ListEmployee) => true}
                template={(employee) => <MapEmployeeListTemplate employee={employee} />}
                sortBy={{
                    id: (a: ListEmployee, b:ListEmployee) => (a.id > b.id ? -1 : 1),
                    firstName: (a: ListEmployee, b: ListEmployee) => (a.firstName.toLowerCase() > b.firstName.toLowerCase() ? -1 : 1),
                    lastName: (a: ListEmployee, b: ListEmployee) => (a.lastName.toLowerCase() > b.lastName.toLowerCase() ? -1 : 1),
                }}
            />
        </div>
    );
}

export default MapsPage;