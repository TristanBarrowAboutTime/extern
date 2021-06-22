import React from 'react';
import styled from 'styled-components'; 
import { Text } from 'react-native';
import SortableList from '../components/cellular-components/sortable-list/SortableList';

const Container = styled.div`
    width: 500px;
`;

const RequestPage = () => {
    return (
        <Container>

        </Container>
    );

}

// const useRequest = () => {
//     return useQuery('imployees', async() => {
//         const data = request('https://localhost:5001/graphql', gql`
//             query {
//                 employees {
//                     items {
//                         id
//                         firstName
//                         lastName
//                     }
//                 }
//             }`
//         );
//         return data;
//     });
// }

export default RequestPage;