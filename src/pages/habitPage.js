import React from 'react';
import styled from 'styled-components'; 

import { myHabits } from '../components/reminder/reminder.js'
import Habit from '../components/reminder/habit.js'




const PageContainer = styled.div`
    width: 80%;
    margin: auto;
`

const HabitContainer = styled(Habit)`
    margin-top:5vh;
`

export default class habitPage extends React.Component {
    constructor(props){
        super(props);

        this.state = { myHabits };
    }

    render () {
        return(
            <div>
                <PageContainer>
                    <center>
                        <h1>Your Reminders</h1>
                    </center>
                    {this.state.myHabits.map(habit => (
                        <div>
                            <HabitContainer
                                habit={habit}
                                >
                            </HabitContainer>
                        </div>
                    ))}
                </PageContainer>
            </div>
            
        
        );
    };
        
};
