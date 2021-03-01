import * as React from 'react';
import styled from 'styled-components';
import TaglessDropDownSelector from '../TaglessDropdownSelector';

const Container = styled.div`
    position: relative;
    display: flex; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const MultipleSelectors = () => {
    return (
        <div></div>
        // <Container>
        //     <div>Show Only...</div>
        //     <div>Role</div>
        //     <TaglessDropDownSelector />
        //     <div>Division</div>
        //     <TaglessDropDownSelector />
        //     <div>Department</div>
        //     <TaglessDropDownSelector />
        //     <div>Employee Groups</div>
        //     <TaglessDropDownSelector />
        // </Container>
    );
}

export default MultipleSelectors;