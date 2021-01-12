import React, { ReactNode } from 'react';
import Card from '../components/atomic-components/Card';
import ColumnCard from '../components/molecular-components/ColumnCard';
import UniformDashboard from '../components/cellular-components/tasks/UniformDashboard';
import styled from 'styled-components';
import Styles from '../style/Styles';
import Button from '../components/atomic-components/Button';
import { ButtonType } from '../types/ButtonType';
import PaceCard from '../components/cellular-components/tasks/PaceCard';
import CircleGauge from '../components/molecular-components/CircleGauge';
import Trending from '../components/cellular-components/tasks/Trending';

/**
 * ex:
 *     <TaskDrilldown    
      hoursBudget={100}
      unitsBudget={300}
      paceNeeded={100}
      currentPace={101}
      paceHoursLeft={4}
      hoursCompleted={5.3}
      totalHoursToComplete={10}
      unitsCompleted={32}
      totalUnitsToComplete={43}
      trending={4}
      hoursRemaining={10}
      totalHoursRemaining={30}
      unitsRemaining={10}
      totalUnitsRemaining={70} 

    />
 */

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