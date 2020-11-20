import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';
import { useClickClosableRef } from '../../hooks/useClickCloseableRef';


const DropdownRelative = styled.div`
    position: relative;
    z-index: 10;
`;

const DropdownAbsolute = styled.div`
    position: absolute;
    padding: 10px;
    background-color: white;
    border: 1px solid black; 
    border-radius: 4px;
`;

type PopupProps = {
    children: ReactChild | ReactChildren
    close: () => void
}

const Popup = (props: PopupProps) => {
    const ref = useClickClosableRef(props.close);;

    return (
        <div>
            <DropdownRelative ref={ref}>
                <DropdownAbsolute>
                    {props.children}
                </DropdownAbsolute>
            </DropdownRelative>
        </div>
    );
}

export default Popup;