import React, { ReactNode } from 'react';
import Card from './Card';
import ColumnCard from './ColumnCard';
import UniformDashboard from './UniformDashboard';
import styled from 'styled-components';
import Styles from '../CustomReportsPage/style/Styles';
import Button from '../CustomReportsPage/components/atomic-components/Button';
import { ButtonType } from '../CustomReportsPage/types/ButtonType';
import PaceCard from './PaceCard';
import CircleGauge from './CircleGauge';
import Trending from './Trending';

const LargeText = styled.div`
    font-size: 54px;
    font-weight: 700;
    color: ${Styles.color.gray.dark};
`;

const Date = styled.div`

`;

const FakeInput = styled.div`
    border: 1px solid black;
    height: 22px;
    width: 90px;
`;

const DateContainer = styled.div`
`;

type TaskDrilldownProps = {
    budgetTitle?: string
    hoursBudget: number,
    unitsBudget: number,
    paceNeeded: number,
    currentPace: number,
    paceHoursLeft: number,
    hoursCompleted: number,
    totalHoursToComplete: number,
    unitsCompleted: number,
    totalUnitsToComplete: number,
    trending: number,
    hoursRemaining: number,
    totalHoursRemaining: number,
    unitsRemaining: number,
    totalUnitsRemaining: number,
}


const TaskDrilldown = ({
    budgetTitle = 'Budget',
    hoursBudget,
    unitsBudget,
    paceNeeded,
    currentPace,
    paceHoursLeft,
    hoursCompleted,
    totalHoursToComplete,
    unitsCompleted,
    totalUnitsToComplete,
    trending,
    hoursRemaining,
    totalHoursRemaining,
    unitsRemaining,
    totalUnitsRemaining,

}: TaskDrilldownProps) => {
    const cards: ReactNode[] = [
        <ColumnCard 
            title={budgetTitle}
            cols={[
                {title: 'Hours Budget', content: <LargeText>{hoursBudget}</LargeText>},
                {title: 'Units Budget', content: <LargeText>{unitsBudget}</LargeText>},
            ]}
        />,
        <PaceCard
            units={'Truck Loads/Hr'} 
            needed={1}
            current={2} 
            hoursLeft={paceHoursLeft} 
        />,
        <ColumnCard
            title={'Complete'}
            cols={[
                {title: 'Hours Completed', content: <CircleGauge value={hoursCompleted} total={totalHoursToComplete} />},
                {title: 'Units Completed', content: <CircleGauge value={unitsCompleted} total={totalUnitsToComplete} />},
                {title: 'Trending', content: <Trending num={trending} />} 
            ]}
        />,
        <ColumnCard
            title={'Remaining'} 
            cols={[
                {title: 'Hours Remaining', content: <CircleGauge value={hoursRemaining} total={totalHoursRemaining} showAsInverse/>},
                {title: 'Units Remaining', content: <CircleGauge value={unitsRemaining} total={totalUnitsRemaining} showAsInverse/>}
            ]}
        />,
        <ColumnCard
            title={'Estimated Complete'}
            cols={[
                {title: 'Estimated Percent', content: <FakeInput></FakeInput>},
                {title: 'Date Updated', content: (
                    <DateContainer>
                        <Date>00/00/00</Date>
                        <Button buttonType={ButtonType.GREEN} disabled={true} text={'Save'} onClick={() => {}}/>
                    </DateContainer>
                )},
                {title: 'Variance', content: <div></div>},
            ]}
        />,
    ];
    // buttonType?: ButtonType,
    // text: string,
    // styles?: object,
    // onClick: () => void,
    // disabled?: boolean
    
      return (
        <UniformDashboard>
            {cards.map(card => {
                return (
                    <Card>
                        {card}
                    </Card>
                );
            })}
        </UniformDashboard>
      );
}

export default TaskDrilldown; 