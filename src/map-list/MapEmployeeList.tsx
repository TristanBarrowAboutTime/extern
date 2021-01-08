import * as React from 'react';
import { useWithSearchBar } from '../CustomReportsPage/hooks/component-hooks/atomic-components/useSearchBar'
import SearchBar from '../CustomReportsPage/components/atomic-components/SearchBar';
import MapEmployee, { EmployeeStatus } from './MapEmployee';
import styled from 'styled-components';

type MapEmployeeData = {
    code: string
    firstName: string
    lastName: string
    location: string
    status: EmployeeStatus
    time: string
    profileImg: string | null
    geoDescrepency: boolean

}

type StyleProps = {
    width: number
    mediaQuerySize: number
}

const Container = styled.div`
    width: ${(props: StyleProps) => props.width}px;

`;

const SearchContainer = styled.div`
    margin: 8px;
`;

const DATA: MapEmployeeData[] = [
    {
        code: '1234',
        firstName: 'Carrol',
        lastName: 'Ling',
        location: '98765 Walmart 777',
        status: EmployeeStatus.CLOCKED_IN,
        time: '6.4 hrs',
        profileImg: null,
        geoDescrepency: true
    },
    {
        code: '24222',
        firstName: 'Mike',
        lastName: 'Rofone',
        location: '98765 Walmart 777',
        status: EmployeeStatus.CLOCKED_IN,
        time: '6.4 hrs',
        profileImg: null,
        geoDescrepency: false
    },
    {
        code: '789',
        firstName: 'Rob',
        lastName: 'Urr',
        location: '98765 Walmart 777',
        status: EmployeeStatus.UNAVAILABLE,
        time: '6.4 hrs',
        profileImg: null,
        geoDescrepency: true
    },
    {
        code: '781',
        firstName: 'Ken',
        lastName: 'Dall',
        location: '98765 Walmart 777',
        status: EmployeeStatus.CLOCKED_OUT,
        time: '6.4 hrs',
        profileImg: null,
        geoDescrepency: false
    }
]

type MapEmployeeListProps = {
    width?: number
    onClick: (employee: MapEmployeeData) => void
    mediaQuerySize?: number
}

const MapEmployeeList = ({
    width = 375,
    onClick,
    mediaQuerySize = 800
}: MapEmployeeListProps) => {
    const binding = useMapEmployeeList({});
    
    return (
        <Container mediaQuerySize={mediaQuerySize} width={width}>
            {/* <MapNav tabs={['Employees', 'Locations', 'Assets']} setPage={(page) => console.log(page)}/> */}
            <SearchContainer>
                <SearchBar {...binding.searchBinding} width={width} mediaQuerySize={mediaQuerySize}/>
            </SearchContainer>
        
        </Container>
    );
}

type UseMapEmployeeListArgs = {
}

const useMapEmployeeList = (args: UseMapEmployeeListArgs) => {
    const search = useWithSearchBar();
    const val = search.value.toLowerCase();
    const shouldShow = (employee: MapEmployeeData): boolean => {
        return (
            employee.code.includes(val) ||
            employee.firstName.toLowerCase().includes(val) ||
            employee.lastName.toLowerCase().includes(val) ||
            employee.location.toLowerCase().includes(val) ||
            employee.time.toLowerCase().includes(val)
        );
    }

    

    return {
        searchBinding: search.searchBinding,
        shouldShow
    }
}

export default MapEmployeeList;