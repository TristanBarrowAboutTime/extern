import React from 'react';
import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';
import styled from 'styled-components'; 

const Container = styled.div`
    width: 500px;
`;


const RequestPage = () => {
    const binding = useRequest();
    return (
        <Container>
            {binding.isSuccess && JSON.stringify(binding.data)}
        </Container>
    );

}

const useRequest = () => {
    return useQuery('imployees', async() => {
        const data = request('https://localhost:5000', gql`
            query {
                employees {
                    items {
                        id
                        firstName
                        lastName
                    }   
                }
            }`
        );
        return data;
    });
}

export default RequestPage;