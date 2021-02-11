import React from 'react';
import styled from 'styled-components'; 
import { Text } from 'react-native';
import SortableList from '../components/cellular-components/sortable-list/SortableList';

const Container = styled.div`
    width: 500px;
`;

type ListThingy = {
    id: string
    name: string
}

const list: ListThingy[] = [
    {
        id: 'A',
        name: 'bobA'
    },
    {
        id: 'B',
        name: 'bobB'
    },
    {
        id: 'C',
        name: 'bobC'
    },
    {
        id: 'D',
        name: 'bobD'
    },
];

const Provider = React.createContext('bob');

const RequestPage = () => {
    const [context, setContext] = React.useState('bob');
    return (
        <Provider.Provider value={context}>
            <Right />
            {/* <button onClick={() => setIsLeftTo(!isLeft)}>toggle</button> */}
            <button onClick={() => setContext(context + '!')}>Set Context</button>
        </Provider.Provider>
    );

}

const Right = () => {
    const context = React.useContext(Provider);
    console.log('right');
    return (
        <div>
            right is rendering: 
            <Left />
            {context}
        </div>
    );
}


const Left = () => {
    const context = React.useContext(Provider);
    console.log('left');
    return (
        <div>
            left
            {context}
        </div>
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