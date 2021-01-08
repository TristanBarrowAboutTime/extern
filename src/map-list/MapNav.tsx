import * as React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
`;

const Tab = styled.div`

`;

type MapNavProps = {
    tabs: {[name: string]: string}
    setPage: (tab: string) => void
}

const MapNav = (props: MapNavProps) => {
    return (
        <Navigation>

        </Navigation>
    );
}

type UseWithMapNavArgs = {
    tabs: {[name: string]: string}
}

export const useWithMapNav = (args: UseWithMapNavArgs) => {
    console.log(Object.keys(args.tabs));
    return args.tabs;
}

export default MapNav;