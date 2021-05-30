import { Segment, Button, Icon, Image, Grid, Ref } from 'semantic-ui-react'
import logo from './img/nohsl-trans-logo.png';
import ImgBg from './img/layover3.jpg';
import './App.css';
export default function (props){
    return(
        <Ref innerRef={props.missionRef}>
            <Segment textAlign="left" className={'jumbotron'}>
                <Grid className={'jumbotron-content'}>
                    <Grid.Column width={10} padded verticalAlign='middle'>
                        <h3>Mission Statement</h3>
                        <p>
                        The North Olmsted Hot Stove Baseball League (NOHSBL) has been the organization providing 
                        our area's children, between the ages of 5 and 18, with organized baseball. 
                        We strive to develop, evaluate and disseminate programs that educate our players 
                        in the fundamentals and rules of baseball and deepen children's commitment to promote values 
                        such as honesty, sportsmanship, fair play and respect for others.
                        </p>
                        <Button floated='right'>
                            <a target="_blank" href="https://www.facebook.com/NorthOlmstedHotStoveLeague/">
                                <Icon name='facebook' />
                                Facebook Page
                            </a>
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={6} centered>
                        <Image className={'jumbotron-logo'} src={logo} alt='logo' />
                    </Grid.Column>
                </Grid>
                
                
            </Segment>
        </Ref>
    )
}
