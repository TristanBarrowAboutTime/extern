import React from 'react';
import { useWithPopoutMenu } from '../../../hooks/component-hooks/molecular-components/usePopoutMenu';
import ArrowPopout, {NormalMenuItem, WarningMenuItem, HR, DisabledMenuItem} from '../popout-menu/ArrowPopout';
import TagDropdownSelector from '../../molecular-components/TagDropdownSelector';
import Button from '../../atomic-components/Button';
import { ButtonType } from '../../../types/ButtonType';
import styled from 'styled-components';



const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;



type NormalFolderViewPopoutProps = {
    selectedRow: number
    run: () => void
    edit: () => void
    share: () => void
    duplicate: () => void
    deleteReport: () => void
}

const t1 = [
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
    'hello',
    'bob',
    'cool',
    'Tristan Barrow',
    'Bob Boberto',
    'Holly Sheet',
    'large thigs',
]
// const t2 = ['Real Time Laborer [Role]'];

const NormalFolderViewPopout = (props: NormalFolderViewPopoutProps) => {
    const binding = useWithPopoutMenu();
    
    return (
        <div>
            <DisabledMenuItem onClick={props.run}>Run</DisabledMenuItem>
            <DisabledMenuItem onClick={props.edit}>Edit</DisabledMenuItem>
            <NormalMenuItem onClick={binding.open}>Share</NormalMenuItem>
            <HR />
            <DisabledMenuItem onClick={props.duplicate}>Duplicate</DisabledMenuItem>
            <HR />
            <WarningMenuItem onClick={props.deleteReport}>Delete</WarningMenuItem>
            {binding.isOpen && (
                <ArrowPopout 
                    menuEvent={binding.menuEvent}
                    hPosition={100}
                >
                    <Header>
                        <span>Employees</span>
                        <Button buttonType={ButtonType.GREEN} onClick={() => {}} text={'Save'}/>
                    </Header>
                    <TagDropdownSelector tags={t1} deleteTag={(tag: string) => console.log(tag)} />
                </ArrowPopout>
            )}
        </div>
    );
}

export default NormalFolderViewPopout;