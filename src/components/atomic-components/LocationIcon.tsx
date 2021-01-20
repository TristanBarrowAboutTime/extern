import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useInitials } from '../../hooks/useInitials';

const Container = styled.div`
    position: relative;
`; 

type InitialsStyle = {
    size: number
    color: string
}

const Initials = styled.div`
    position: absolute;
    text-align: center;
    box-sizing: border-box;
    height: ${(props: InitialsStyle) => props.size}px;
    width: ${(props: InitialsStyle) => props.size * 0.75}px;
    font-size: ${(props: InitialsStyle) => props.size * 0.4}px;
    padding-top: ${(props: InitialsStyle) => props.size * 0.1}px;
    color: ${(props: InitialsStyle) => props.color};
    
`;


type LocationIconProps = {
    first: string
    last: string
    color?: string
    textColor?: string
    size?: number
}

const LocationIcon = (props: LocationIconProps) => {
    const { first, last, color, size, textColor } = props;

    const initals = useInitials({ first, last })
    return (
        <Container>
            <Initials 
                size={size as number} 
                color={textColor as string}
            >
                {initals}
            </Initials>
            <FontAwesomeIcon
                icon={faMapMarker} 
                color={color} 
                style={{fontSize: size}} 
            />
        </Container>

    ); 
}

LocationIcon.defaultProps = {
    color: 'gray',
    textColor: '#E9E9E9',
    size: 50,

}

export default LocationIcon;