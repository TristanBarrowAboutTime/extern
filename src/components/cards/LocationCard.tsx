import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Clamp from 'react-clamp-lines';

type CompTheme = {
    colors: {
        error: string
        subTitle: string
        normalIcon: string
        locationPin: string
    }
}

const DEFAULT_THEME = {
    theme: {
        colors: {
            error: 'red',
            subTitle: '#525252',
            normalIcon: '#5A5A5A',
            locationPin: 'red'
        }
    } as CompTheme
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${(props: { width: number }) => props.width}px;
    padding-bottom: 10px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 8px;
    margin-right: 8px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const Chevron = styled(FontAwesomeIcon).attrs((props) => {
    return { color: props.theme.colors.text, icon: faChevronRight }
})``;


const titleAttrs = () => ({ lines: 2, buttons: false, id: '1343214738954703489743980170' });

const Title = styled(Clamp).attrs(titleAttrs)`
    font-size: 20px;
`;

const subTitleAttrs = () => ({ lines: 1, buttons: false, id: '542354254' });
const SubTitle = styled(Clamp).attrs(subTitleAttrs)`
    color: ${(props: { theme: CompTheme }) => props.theme.colors.subTitle};
`;

SubTitle.defaultProps = DEFAULT_THEME;

export type LocationCardProps = {
    code: string
    name: string
    initials: string 
    address: string
    showChevron?: boolean
    width?: number
}

const LocationCard = ({
    code,
    name,
    initials,
    address,
    width = 100,
    showChevron = true,
}: LocationCardProps, ref: React.Ref<HTMLDivElement>) => {

    return (
        <Container width={width} ref={ref}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{fontSize: '35px'}} color='#9B3E38' />
            <Content>
                <Row>
                    <Title text={`${code} ${name}`} />
                </Row>
                <SubTitle text={address} />
            </Content>
            {showChevron && <Chevron />}
        </Container>
    );
}

export default React.forwardRef(LocationCard);