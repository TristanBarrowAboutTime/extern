import * as React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
    display:flex;
    width: 400;
    border-color: '#ddd';
    padding-left:20;
    padding-right:20;
    padding-top:20;
    padding-bottom:20;
`;
const LocationLabel = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:flex-start;   

`;

const Image = styled.View`
`;

const Employee = styled.View`
`;
const Site = styled.View`
`;

type LocationEmployeeProps = {
    image: React.ReactNode
    employee: React.ReactNode
    site: React.ReactNode
}

const LocationEmployee = (props: LocationEmployeeProps) => {
    return (
        <Container>
            <Image>
                {props.image}
            </Image>
            <Employee>
                {props.employee}
            </Employee>

            <Site>
                {props.site}
            </Site>

        </Container>
    )
}

export default LocationEmployee;