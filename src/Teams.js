import { Segment, Grid, Button, CardGroup, Ref } from 'semantic-ui-react';
import { TeamCard } from './Team';

export default function Teams (props) {
    return(
        <Ref innerRef={props.teamsRef}>
            <Segment className={"teams-container"}>
            <h1>Teams and Coach</h1>
            <CardGroup centered>
                <TeamCard 
                    coachClass={'Class I'} 
                    coachName={'Coach Poole'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6237295?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class HH'} 
                    coachName={'Coach Flick'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6255818?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class H'} 
                    coachName={'Coach Goats'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6256181?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class H'} 
                    coachName={'Coach Bryant'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6256190?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class GG'} 
                    coachName={'Coach Lazar'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6283277?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class G'} 
                    coachName={'Coach Grindle'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6284645?subseason=737971'}
                />
                <TeamCard 
                    coachClass={'Class F'} 
                    coachName={'Coach Bloomfield'}
                    scheduleUrl={'https://www.loraincountyhotstove.com/schedule/team_instance/6269036?subseason=737971'}
                />
            </CardGroup>
            
            <Grid centered>
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class I </p><p> Coach Poole</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6237295?subseason=737971'>
                                View Schedule
                            </a>
                        </Button>

                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class HH </p><p>Coach Flick</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6255818?subseason=737971'>
                                View Schedule
                            </a>
                        </Button>
                    
                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class H </p><p> Coach Goats</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6256181?subseason=737971'>
                                View Schedule
                            </a>
                        </Button>
                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class H </p><p> Coach Bryant</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6256190?subseason=737971'>
                                View Schedule
                            </a>
                        </Button>
                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class GG </p><p> Coach Lazar</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6283277?subseason=737971'>
                                View Schedule
                            </a>                
                        </Button>
                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                        <p>Class G </p><p> Coach Grindle</p>
                            <Button size='small' className='team-schedule-button'>
                                <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6284645?subseason=737971'>
                                    View Schedule
                                </a>
                            </Button>
                </Grid.Column> */}
                {/* <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                    
                        <p>Class F </p><p> Coach Bloomfield</p>
                        <Button size='small' className='team-schedule-button'>
                            <a target="_blank" href='https://www.loraincountyhotstove.com/schedule/team_instance/6269036?subseason=737971'>
                                View Schedule
                            </a>
                        </Button>
                </Grid.Column> */}
                <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                    <p>Class EE </p><p> Coach Greif</p>
                    <p>no schedule yet</p>
                </Grid.Column>
                <Grid.Column verticalAlign='middle' textAlign='center' container width={3}>
                    <p>Class EE </p><p> Coach Rahm</p>
                    <p>no schedule yet</p>
                </Grid.Column>
            </Grid>
        </Segment>
    </Ref>
    )
}
