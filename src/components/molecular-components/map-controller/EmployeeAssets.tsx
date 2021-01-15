import * as React from 'react';
import { useWithSearchBar } from '../../../hooks/component-hooks/atomic-components/useSearchBar';
import styled from 'styled-components/native';
import SearchBar from '../../atomic-components/SearchBar';

const ContainerView = styled.View`
    display: flex;
    width: 400;
    border-color: '#ddd';
    padding-left: 20;
    padding-right: 20;
    padding-top: 20;
    padding-bottom: 20;
`;

const CardView = styled.View`
    padding-left: 10;
    padding-right: 10;
    padding-top: 10;
    padding-bottom: 10;
    margin-top: 10;
    border-width: 1;
    border-radius: 2;
    border-color: #ddd;
    border-bottom-width: 0;
    shadow-color: #000;
    shadow-offset: {width: 0; height: 2};
    shadow-opacity: 0.8;
    shadow-radius: 2;
    elevation: 1;
`;

const TextView = styled.View`
    flex-direction:row;
    justify-content: space-between;
`;

const NavView = styled.View`
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    margin-bottom:10;
`;

const TextGreen = styled.View`
    color:#85B554;    
`;

const EmployeeAssets = () => {
    const searchBar = useWithSearchBar();

    return (
        <ContainerView>
            <SearchBar {...searchBar.searchBinding} margin={8} />
           
        </ContainerView>
    )
}

export default EmployeeAssets