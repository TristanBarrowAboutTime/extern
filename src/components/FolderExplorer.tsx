import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 350px;
    box-shadow: 0 1px 8px black;
    margin-left: 16px;
    padding-top: 8px;
    min-height: 500px;
`;

const Title = styled.div`
    margin-left: 32px;
`;

const SearchBar = styled.div`
    margin-top: 5px;
    margin-left: 32px;
`;

const List = styled.div`
    margin-top: 16px;
`;

const ListItem = styled.div`
    background-color: #ddd;
    list-style: none;
    padding-left: 32px;
`;

type ReportNames = {
    id: string
    name: string
}

const ListExplorer = () => {

    const customReportNames: ReportNames[] = [
        {
            id: '__mock_custom_reports_id__',
            name: 'Custom Reports',
        }
    ];

    return (
        <Container>
            <Title>Custom Reports</Title>
            {/* should be SearchBar eventually */}
                <SearchBar>
                <input type="text" />
                </SearchBar>



            <List>
                {customReportNames.map((item) => (
                    <ListItem key={item.id}>
                        {item.name}
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default ListExplorer;