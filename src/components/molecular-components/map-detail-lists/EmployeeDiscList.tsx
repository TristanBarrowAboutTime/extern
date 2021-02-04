import * as React from 'react';
import styled from 'styled-components/native';

const CardView = styled.View`
    width: auto;
    padding: 10px;
    margin-top:10;
    border-radius: 4px;
    box-shadow: 0 1px 4px #cccccc;
`;

const CompanyArea = styled.Text`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #525252;
    padding-bottom:10px;
    font-size:15px;
    font-weight:600;
    
`;

type TimeStyle = {
    isClockedIn: boolean
    theme: {
        colors: {
            green: string
            red: string
        }
    }
}

const Time = styled.Text`
    color: ${(props: TimeStyle) => props.isClockedIn ?  props.theme.colors.green : props.theme.colors.red};
`;

Time.defaultProps = {
    isClockedIn: true,
    theme: {
        colors: {
            green: '#79A949',
            red: '#9B3E38' 
        }
    }
}

type DistanceStyle = {
    theme: {
        colors: {
            red: string
        }
    }
}

const Distance = styled.Text`
    display: flex;
    width: auto;
    padding-bottom: 20px;
    font-size: 15px;
    color: ${(props: DistanceStyle) => props.theme.colors};
`;

Distance.defaultProps = {
    theme: { 
        colors: {
            red: '#9B3E38'
        }
    }
}

type GrayTextStyle = {
    theme: {
        fontColors: {
            default: string
        }
    }
}

const Notes = styled.Text`
    font-size: 15px;
    color: ${(props: GrayTextStyle) => props.theme.fontColors.default};
    font-weight: 600;
`;

Notes.defaultProps = {
    theme: {
        fontColors: {
            default: '#525252'
        }
    }
}

const Text = styled.Text`
    color: ${(props: GrayTextStyle) => props.theme.fontColors.default};
    padding-bottom: 10px;
    font-size: 15px;
`;

Text.defaultProps = {
    theme: {
        fontColors: {
            default: '#525252'
        }
    }
}

export type EmployeeDiscRecord = {
    company: string
    time: string
    distance: string
    notes: string
    text: string
}

type EmployeeDiscListProps = {
    discRecords: EmployeeDiscRecord[]
    filterValue: string
}

const EmployeeDiscList = (props: EmployeeDiscListProps) => {
    const value = props.filterValue.toLowerCase();
    return (
        <>
            {props.discRecords.map((item) => {
                if (item.company.toLowerCase().includes(value) ||
                    item.time.toLowerCase().includes(value) ||
                    item.distance.toLowerCase().includes(value) ||
                    item.text.toLowerCase().includes(value)) 
                {
                    return (
                        <CardView>

                            <CompanyArea>
                                {item.company}

                                <Time isClockedIn={true} >
                                    {item.time}
                                </Time>

                            </CompanyArea>

                            <Distance>
                                {item.distance}
                            </Distance>

                            <Notes>
                                {item.notes}
                            </Notes>
                            <Text>
                                {item.text}
                            </Text>
                        </CardView>

                    )
                }

            })}
        </>
    )
}

export default EmployeeDiscList;