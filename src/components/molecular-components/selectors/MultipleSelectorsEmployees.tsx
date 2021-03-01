import * as React from 'react';
import styled from 'styled-components';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../../hooks/component-hooks/molecular-components/useCheckmark';
import TaglessDropDownSelector from '../TaglessDropdownSelector';
import DepartmentSelector, { Department } from './DepartmentSelector';
import DivisionSelector, { Division } from './DivisionSelector';
import EmployeeGroupSelector, { EmployeeGroup } from './EmployeeGroupSelector';
import EmployeeSelector, { Employee } from './EmployeeSelector';
import TagSelector, { Tag } from './TagSelectors';

let employees: Employee[] = [];
for (let i = 0; i < 15; i++) {
    employees.push({id: i, code: `00${i}`, name: `Joseph Peterson`});
}

let departments: Department[] = [
    {
        id:0,
        name: 'Development',
},
{
        id:1,
        name: 'Sales',
}];

let divisions: Division[] = [
    {
        id:0,
        name: 'East Coast',
},
{
        id:1,
        name: 'West Coast',
}
];

let employeeGroup: EmployeeGroup[] = [
    {
    id:0,
    name: 'Cement Crew',
},
{
    id:1,
    name: 'Framing Crew',
}];

let tags: Tag[] = [
    {
        id:0,
        name: 'geo decrepency',
    }
]

const Container = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const TagElement = styled.div`
margin:10px;

`;
let order = true;

const MultipleSelectorsEmployees = () => {

    // const [sortedGroup, setSortedGroup] = React.useState(employeeGroup);
    
    // const sortedGroupByName = () => {  
    //     order = !order;      
    //     console.log('order of sorting', order)
    //     const sort = order ? employeeGroup : employeeGroup.reverse()
    //     //API response will always be in sorted order, so reverse() will work for sor
    //     //  const sort = employeeGroup.sort((a,b) => order ? a.name > b.name : a.name < b.name);
     
    //      setSortedGroup(sort);

  
    const employeeSlaves = useMultipleCheckmarkSlaves(employees.length);
    const employeeMaster = useMasterCheckmark(employeeSlaves);

    const departmentSlaves = useMultipleCheckmarkSlaves(departments.length);
    const departmentMaster = useMasterCheckmark(departmentSlaves);

    const tagSlaves = useMultipleCheckmarkSlaves(tags.length);
    const tagMaster = useMasterCheckmark(tagSlaves);

    const divisionSlaves = useMultipleCheckmarkSlaves(divisions.length);
    const divisionMaster = useMasterCheckmark(divisionSlaves);

    const employeeGroupSlaves = useMultipleCheckmarkSlaves(employeeGroup.length);
    const employeeGroupMaster = useMasterCheckmark(employeeGroupSlaves);

    return (
        <Container>
            <TagElement>Only Show...</TagElement>
            <TagElement>Employee</TagElement>
            <TaglessDropDownSelector> 
             <EmployeeSelector 
                employees={employees} 
                size={10}
                slaves={employeeSlaves}
                master={employeeMaster}
            />
            </TaglessDropDownSelector>
            <TagElement>Tags</TagElement>
            <TaglessDropDownSelector >
            <TagSelector
                tags={tags} 
                size={10}
                slaves={tagSlaves}
                master={tagMaster} 
            />
            </TaglessDropDownSelector>
            <TagElement>Division</TagElement>
            <TaglessDropDownSelector >
            <DivisionSelector
                divisions={divisions} 
                size={10}
                slaves={departmentSlaves}
                master={divisionMaster}
            />
            </TaglessDropDownSelector>
            <TagElement>Department</TagElement>
            <TaglessDropDownSelector >
            <DepartmentSelector
                departments={departments} 
                size={10}
                slaves={departmentSlaves}
                master={departmentMaster}
            />
            </TaglessDropDownSelector>
             <TagElement>Employee Groups</TagElement>
            <TaglessDropDownSelector >
                <EmployeeGroupSelector
                    employeeGroup={employeeGroup} 
                    size={10}
                    slaves={employeeGroupSlaves}
                    master={employeeGroupMaster}
               
            />
                </TaglessDropDownSelector> 
        </Container>
    );
}

export default MultipleSelectorsEmployees;