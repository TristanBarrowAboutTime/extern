import { icon } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styled from 'styled-components';
import Styles from '../CustomReportsPage/style/Styles';

const QUERY = 400;

const Container = styled.span`
    position: relative;
`;

const Path = styled.span`
    @media only screen and (max-width: ${QUERY}px) {

    }
`;

const PathSlash = styled.span`
    @media only screen and (max-width: ${QUERY}px) {
        display: none;
    }
    
`;

const LinkText = styled.span`
    white-space: nowrap;
    color: ${Styles.color.green};

`;

const LinkContainer = styled.span`
    @media only screen and (max-width: ${QUERY}px) {
        display: none;
        position: absolute;
        right: 0;


        & ${LinkText}:hover {
            cursor: pointer;
        }
    }
`;

const LargeView = styled.span`
    @media only screen and (min-width: ${QUERY}px) {
        display: none;
    }
    
`;

const SmallView = styled.span`
    @media only screen and (max-width: ${QUERY}px) {
        display: none;
        &:hover ${LinkContainer} {
            display: block;
        }
    }

`;

export type PathLink = {
    text: string
    onClick: () => void
}


type FilePathProps = {
    path: PathLink[]
}

const FilePath = (props: FilePathProps) => {
    // const binding = useFilePath({path: props.path});
    return (
        <Container>
            <SmallView>
                <FontAwesomeIcon style={{paddingRight: '4px'}} icon={faChevronLeft} color={Styles.color.green} />
            </SmallView>
            <LargeView>
                <FontAwesomeIcon style={{paddingRight: '4px'}} icon={faThList} color={Styles.color.green} />
            </LargeView>
            <Path>
                {props.path.map((pathLink, index) => {
                    const styles = (index === props.path.length - 1) ? {
                        color: 'black'
                    } : {
                        color: Styles.color.green,
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    };
                    return (
                        <LinkContainer>
                            {index !== 0 && <PathSlash> / </PathSlash>}
                            <LinkText onClick={pathLink.onClick} style={styles}>
                                {pathLink.text}
                            </LinkText>
                        </LinkContainer>
                    )
                })}
            </Path>
        </Container>
    ); 
}

// type UseFilePathArgs = {
//     path: React.ReactNode[]
// }

// const useFilePath = (args: UseFilePathArgs) => {
//     return {bob: 'bob'}
// }

export default FilePath;