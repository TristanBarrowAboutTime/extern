import React from 'react';
import renderer from 'react-test-renderer';
import Modal from '../../../components/molecular-components/Modal';
import { ButtonType } from '../../../components/atomic-components/Button';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

describe('Modal', () => {

    it('renders correctly', () => {
        const modalMock = {
            title: 'title',
            content: 'content',
            buttons: [
                {
                    text: 'Button',
                    buttonType: ButtonType.NORMAL,
                    onClick: jest.fn()
                }
            ],
            closeModal: jest.fn()
        }

        const component = renderer.create(
            <Modal {...modalMock} />
        ).toJSON();

        expect(component).toMatchSnapshot();
    });

    it('gets its button clicked', () => {
        const buttonFunc = jest.fn();
        const closeModal = jest.fn();

        const modalMock = {
            title: 'title',
            content: 'content',
            buttons: [
                {
                    text: 'Button',
                    buttonType: ButtonType.NORMAL,
                    onClick: buttonFunc
                }
            ],
            closeModal: closeModal
        }

        const component = renderer.create(
            <Modal {...modalMock} />
        );

        component.root.findByProps({ key: 'Button' }).props.onClick();
        component.root.findByProps({ icon: faTimes }).props.onClick();

    });
})