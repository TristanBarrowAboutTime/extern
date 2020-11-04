import React from 'react'; 
import NormalFolderRow from '../../../../components/folder-selection-list/NormalFolderRow';
import { useNormalFolderRow } from '../../../../hooks/component-hooks/folder-selection-list/useNormalFolderRow';

jest.mock('../../../../hooks/component-hooks/folder-selection-list/useNormalFolderRow', () => {
    
});

describe('Normal Folder Row', () => {
    it('gets rendered correctly', () => {
        console.log(useNormalFolderRow);
    });
});