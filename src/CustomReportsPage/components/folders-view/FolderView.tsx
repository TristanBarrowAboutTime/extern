import * as React from 'react';
import styled from 'styled-components';
import SearchBar from '../atomic-components/SearchBar';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import NormalGrid from '../grid/NormalGrid';
import Button from '../atomic-components/Button';
import ChevronButton from '../atomic-components/ChevronButton';
import { ButtonType } from '../../types/ButtonType';
import { HSpacer } from '../atomic-components/CssTriangle';
import NormalFolderViewPopout from './NormalFolderViewPopout';


const rd = (name: string, description: string, lastRunDate: string) => {
    return {reportName: name, description, lastRunDate }
}

let gridData: any = [];

for (let i = 0; i < 10; i++) {
    gridData.push(rd('Week Productivity Report', 'This is a thing. That can do other things. Yup! This is a thing. That can do other things. Yup! This is a thing. That can do other things. Yup!', '10/10/10 8:22pm'));
}

const Container = styled.div`
    width: 100%;
    margin: 0 32px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 8px;
`;

const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const FolderName = styled.div`
    font-size: 36px;
    font-weight: 900;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400px;
`;

type FolderViewProps = {
    folderName: string
}

const FolderView = (props: FolderViewProps) => {
    const searchBar = useWithSearchBar();
    const isEmpty = true;

    return (
        <Container>
            <Header>
                <TitleRow>
                    <FolderName>{props.folderName}</FolderName>
                    <SearchBar {...searchBar.searchBinding} />
                </TitleRow>
                <ButtonRow>
                    <Button
                        buttonType={ButtonType.RED}
                        text='Delete'
                        onClick={() => alert('not doing anything yet')}
                    />
                    <HSpacer size={8} />
                    <ChevronButton
                        buttonType={ButtonType.NORMAL}
                        text='Move to Folder'
                    >bob</ChevronButton>
                    <ChevronButton 
                        buttonType={ButtonType.BARE}
                        text='Sharing'
                    >bob</ChevronButton>
                </ButtonRow>
            </Header>
            <NormalGrid 
                popoutMenu={(
                    <NormalFolderViewPopout 
                        run={() => {}}
                        edit={() => {}}
                        share={() => {}}
                        duplicate={() => {}}
                        deleteReport={() => {}}
                    />
                )}
                gridData={gridData}
             />
        </Container>
    );
}

export default FolderView;