import React, { Component } from 'react';
import renderer from 'react-test-renderer';
import EditFolderRow from '../../../components/folder-selection-list/EditFolderRow';


describe('Edit Folder Row', () => {
    it('renders Correctly', () => {
        const tree = renderer.create(
            <EditFolderRow 
                
            />
        )       
    });
})