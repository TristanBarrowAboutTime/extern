import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Button from '../atomic-components/Button';
import { ButtonType } from '../../types/ButtonType';
import Styles from '../../style/Styles';
import styled from 'styled-components';

type ModalProps = {
    title: string
    content: string
    buttons: {
        text: string,
        buttonType: ButtonType, 
        onClick:() => void,
    }[],
    closeModal: () => void
}

const Blackout = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,.1);
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 550px;
    margin-top: 75px;
    height: 200px;
    background-color: white;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-stretch;
    background-color: gray;
    border-top: 2px solid;
    height: 22px;
`;

const Title = styled.div`
    color: white;
`;

const Close = styled.div`
    margin-right: 5px;
    margin-top: 3;
    color: white;
    :hover {
        cursor: 'pointer';
    }
`;

const Body = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Message = styled.div`
    margin-top: 24px;
`;

const ButtonSet = styled.div`
    margin-bottom: 16px;
`;

const Modal = ({
    title,
    content,
    buttons,
    closeModal,

}: ModalProps) => {
    return (
        <Blackout>
            <Container>
                <Header>
                    <div />
                    <Title>{title}</Title>
                    <Close>
                        <FontAwesomeIcon 
                            icon={faTimes} 
                            color={Styles.color.white} 
                            onClick={closeModal}
                        />
                    </Close>
                </Header>
                <Body>
                    <Message>{content}</Message>
                    <ButtonSet>
                        {buttons.map((button) => {
                            return (
                                <Button 
                                    key={button.text}
                                    buttonType={button.buttonType}
                                    onClick={button.onClick}
                                    text={button.text}
                                    styles={{marginLeft: 4, marginRight: 4}}
                                />
                            );
                        })}
                    </ButtonSet>
                </Body>
            </Container>
        </Blackout>
    );
}

export default Modal;