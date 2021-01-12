import * as React from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../../atomic-components/LoadingSpinner';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
`;



type LoadableContentProps = {
    children: ReactNode
    isLoaded: boolean
}

const LoadableContent = (props: LoadableContentProps) => {
    return (
        <>
            {props.isLoaded ? (props.children) : (
                <Container>
                    <LoadingSpinner />
                </Container>
            )}
        </>
    );
}

export default LoadableContent;