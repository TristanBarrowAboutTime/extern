import * as React from 'react';
import Button from "../../../atomic-components/Button";
import ChevronButton from '../../../atomic-components/ChevronButton';
import { ButtonType } from '../../../../types/ButtonType';
import SearchBar, { SearchBarProps } from '../../../atomic-components/SearchBar';
import { HSpacer } from '../../../atomic-components/CssTriangle';
import styled from 'styled-components';
import EmployeeSelector, { Employee } from '../../../molecular-components/selectors/EmployeeSelector';
import { useMasterCheckmark, useMultipleCheckmarkSlaves } from '../../../../hooks/component-hooks/molecular-components/useCheckmark';
import FolderSelector from '../../../molecular-components/selectors/FolderSelector';
import { Folders } from '../../../../types/Folders';

let employees: Employee[] = [];

for (let i = 0; i < 105; i++) {
    employees.push({id: i, code: `00${i}`, fullName: `Bob Boberto the ${i}th`});
}

const ButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    
`;

type NormalButtonRowProps = {
    onDelete: () => void
    moveFolderContent: React.ReactChild
    sharingContent: React.ReactChild
    searchBinding: SearchBarProps
    folders: Folders
}

const NormalButtonRow = (props: NormalButtonRowProps) => {
    const binding = useNormalButtonRow({
        numOfEmployees: employees.length
    });
    return (
        <ButtonRow>
            <Button
                buttonType={ButtonType.GREEN}
                text='New Report'
                onClick={props.onDelete}
            />
            <HSpacer size={8} />
            <Button
                buttonType={ButtonType.RED}
                text='Delete'
                onClick={props.onDelete}
            />
            <HSpacer size={8} />
            <ChevronButton
                buttonType={ButtonType.NORMAL}
                text='Move to Folder'
            >
                <FolderSelector
                    folders={['f1','f2']}
                    size={2}
                />
            </ChevronButton>
            <ChevronButton
                buttonType={ButtonType.BARE}
                text='Sharing'
            >
                <EmployeeSelector 
                    employees={employees}
                    size={employees.length}
                    slaves={binding.slaves}
                    master={binding.master}
                />
            </ChevronButton>
            <SearchBar {...props.searchBinding} />
        </ButtonRow>
    );
}

type UseNormalButtonRow = {
    numOfEmployees: number
}

const useNormalButtonRow = (args: UseNormalButtonRow) => {
    const slaves = useMultipleCheckmarkSlaves(employees.length);
    const master = useMasterCheckmark(slaves);
    
    return {
        slaves,
        master
    }
}

export default NormalButtonRow;
