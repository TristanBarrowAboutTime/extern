import * as React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { EmployeeLocationType } from '../../../types/EmployeeLocationType';

const Container = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 360;

`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

`;

const Content = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8;
    margin-right: 8;
`;

const Title = styled.Text`
    font-size: 20px;
`;


type EmployeeListTemplateProps = {
    employee: EmployeeLocationType
}

const EmployeeLocationTemplate = ({ employee }: EmployeeListTemplateProps) => {
    const {
        code,
        name,
        address,
    } = employee;

    return (
        <Container key={code}>
            <Content>
                <Row>                  
                    <Link to= "/employee-details">  
                    <Title>
                        {`${code} ${name} ${address}`}
                    </Title >
                    </Link>                
                </Row>
         
            </Content>
            <FontAwesomeIcon icon={faChevronRight} color={'gray'} />
        </Container>
    )
}

export default EmployeeLocationTemplate;