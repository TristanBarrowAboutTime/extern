import * as React from 'react';
import styled from 'styled-components/native';

const Employee = styled.View``;

type AssetsActivityProps ={
    employee: React.ReactNode
}

const AssetsActivity = (props: AssetsActivityProps) => {
    return (
        <Employee>{props.employee}</Employee>
    )
}

export default AssetsActivity;