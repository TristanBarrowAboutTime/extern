import * as React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
`;

const Status = styled.div`
    position: absolute;
    border-radius: 50%;
    border: 2px solid white;
    top: 6px;
    right: 6px;
    height: 9px;
    width: 9px;
    background-color: ${(props: {color: string}) => props.color};
`;

const BlankImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: lightgray;
`;

type ProfileImageProps = {
    firstName: string
    lastName: string
    image?: string | null
    showStatus?: boolean
    statusColor?: string
}

const ProfileImage = ({
    firstName,
    lastName,
    image = null,
    showStatus = false,
    statusColor = 'black'
}: ProfileImageProps) => {
    const binding = {
        initials: firstName[0] + lastName[0],
        showingImage: image !== null
    }
    return (
        <Container>
            {showStatus && <Status color={statusColor} />}
            {binding.showingImage ? (
                <img src={image as string} alt={`${firstName} ${lastName}`}/>
            ) : (
                <BlankImage>{binding.initials}</BlankImage>
            )}
        </Container>
    );
}

export default ProfileImage;