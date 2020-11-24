import { faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faShower } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react'; 
import { useCallback, useMemo } from 'react'; 
import styled from 'styled-components';
import Styles from '../../style/Styles';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const IconContainer = styled.div`
    position: relative;
    top: 1px;
    padding: 0 3px;
`;

const Txt = styled.span`
    padding-left: 4px;
    color: ${Styles.color.green};
    :hover {
        cursor: pointer;
    }
`;

type PagingBarProps = {
    currentPage: number
    numOfPages: number
    showGoToEnd: boolean
    pagesShowing: number // 0: all, n: n to the left and n to the right
    first?: () => void
    last?: () => void
    next: () => void
    prev: () => void
    goTo: (page: number) => void
}

const PagingBar = (props: PagingBarProps) => {
    const binding = usePagingBar(props);

    return (
        <Container>
            {binding.showFirst && (
                <IconContainer>
                    <FontAwesomeIcon
                        onClick={props.first}
                        icon={faAngleDoubleLeft} 
                        color={Styles.color.green}
                    />
                </IconContainer>
            )}
            {binding.showPrev && (
                <IconContainer>
                    <FontAwesomeIcon 
                        onClick={props.prev}
                        icon={faAngleLeft} 
                        color={Styles.color.green}
                    />
                </IconContainer>
            )}
            {binding.showPrevEllipsis && <Txt>...</Txt>}
            {binding.pages.map((_, i) => {
                return binding.shouldShowNumber(i) ? (
                    <Txt
                        key={i}
                        style={props.currentPage === i ? { fontWeight: 'bold' } : {}}
                        onClick={() => props.goTo(i)}
                    >
                        {`${i+1}`}
                    </Txt>
                ) : null;
            })}
            {binding.showNextEllipsis && <Txt>...</Txt>}
            {binding.showNext && (
                <IconContainer>
                    <FontAwesomeIcon 
                        onClick={props.next}
                        icon={faAngleRight}
                        color={Styles.color.green} 
                    />
                </IconContainer>
            )}
            {binding.showLast && (
                <IconContainer>
                    <FontAwesomeIcon 
                        onClick={props.last}
                        icon={faAngleDoubleRight} 
                        color={Styles.color.green}
                    />
                </IconContainer>
            )}
        </Container>
    )
}

type UsePagingBarArgs = {
    numOfPages: number
    pagesShowing: number
    showGoToEnd: boolean
    currentPage: number
    first?: () => void | undefined
    last?: () => void | undefined
    goTo: (page: number) => void
}

const usePagingBar = (args: UsePagingBarArgs) => {
    
    const pages = useMemo(() => {
        return Array(args.numOfPages).fill(null).map((_, i) => i)
    }, [args.numOfPages]);

    const shouldShowNumber = useCallback((pageNumber: number): boolean => {
        if (args.pagesShowing === 0) return true;
        return (
            pageNumber >= args.currentPage - args.pagesShowing && 
            pageNumber <= args.currentPage + args.pagesShowing
        );
    }, [args.currentPage]);

    const showFirst = useMemo(() => {
        return args.showGoToEnd && args.currentPage > 0;
    }, [args.showGoToEnd, args.currentPage]);
    
    const showPrev = useMemo(() => {
        return args.currentPage > 0;
    }, [args.currentPage]);
    
    const showPrevEllipsis = useMemo(() => {
        return !shouldShowNumber(0);
    }, [args.currentPage, args.numOfPages]);

    const showNextEllipsis = useMemo(() => {
        return !shouldShowNumber(args.numOfPages - 1);
    }, [args.currentPage, args.numOfPages]);

    const showNext = useMemo(() => {
        return args.currentPage < args.numOfPages - 1;
    }, [args.currentPage, args.numOfPages]);

    const showLast = useMemo(() => {
        return args.showGoToEnd && args.currentPage < args.numOfPages - 1;
    }, [args.showGoToEnd, args.currentPage, args.numOfPages]);

    return {
        pages,
        showFirst,
        showPrev,
        showPrevEllipsis,
        showNextEllipsis,
        showNext,
        showLast,
        shouldShowNumber
    }
}

export default PagingBar;