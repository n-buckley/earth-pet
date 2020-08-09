//make page to add new reminders and list current reminders 
import React from 'react';
import styled from 'styled-components';

import Reminder from '../components/reminder/reminder.js'

const ReminderContainer = styled(Reminder)`
    margin-top:5vh;
`

const PageContainer = styled.div`
    width: 80%;
    margin: auto;
`

const LandingPage = styled.div`
    margin: 0;
    position: relative;
    width: 100%;
    background-color: #aaa;
    height: 100vh;
    opacity: 1;
    text-align: center;
    font-size: 5vh;
    font-weight: 100;
    color: #fff;
    margin: auto;
    background: linear-gradient(#F2709C, #F5A7A4, #F5A7A4, #99e4ee);
`


const Title = styled.h2`
    margin: auto; 
    padding-top: 25vh;
    padding-bottom: 5vh;
    font-size: 10vh;
`
const Subtitle = styled.p`
    margin:auto;
    font-size: 4vh;
`

export default class landingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <LandingPage>
                    <PageContainer>

                        <Title>WELCOME</Title>
                        <Subtitle>This app will help you keep on top of sustainable habits by reminding you and incentivizing you by taking care of a cute animal</Subtitle>
                    </PageContainer>
                </LandingPage>
                <PageContainer>
                    <center>
                        <h1>Add New Reminders</h1>
                    </center>
                    {reminders.map(rem => (
                        <ReminderContainer
                            reminder={rem.r}>
                        </ReminderContainer>
                    ))}
                </PageContainer>

            </div>


        );
    };

};


const reminders = [{ r: "hi there" }, { r: "woo!" }, { r: "did I do it?" }]

