import React from 'react';
import {NormalMenuItem, WarningMenuItem, HR, DisabledMenuItem} from '../popout-menu/ArrowPopout';

type NormalFolderViewPopoutProps = {
    run: () => void
    edit: () => void
    share: () => void
    duplicate: () => void
    deleteReport: () => void
}

const NormalFolderViewPopout = (props: NormalFolderViewPopoutProps) => {
    return (
        <div>
            <DisabledMenuItem onClick={props.run}>Run</DisabledMenuItem>
            <DisabledMenuItem onClick={props.edit}>Edit</DisabledMenuItem>
            <DisabledMenuItem onClick={props.share}>Share</DisabledMenuItem>
            <HR />
            <NormalMenuItem onClick={props.duplicate}>Duplicate</NormalMenuItem>
            <HR />
            <WarningMenuItem onClick={props.deleteReport}>Delete</WarningMenuItem>
        </div>
    );
}

export default NormalFolderViewPopout;