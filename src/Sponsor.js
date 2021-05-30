import { Grid, Image, Segment, Ref } from 'semantic-ui-react'
import "./App.css";
// import ImgMediaParagraph from './img/media-paragraph.png';
// import ImgBellaMi from './img/logo/bellami.png';
import ImgBSN from './img/logo/BSN.png';
import ImgDicks from './img/logo/Dicks.png';
import ImgGanley from './img/logo/Ganley.png';
import ImgKessler from './img/logo/Kessler.png';
import ImgMK from './img/logo/MK.png';
import ImgTM from './img/logo/TM.png';
import ImgVFW from './img/logo/VFW.jpg';
import ImgYanok from './img/logo/Yanok.png';

export default function Sponsor(props){
    return(
        <Ref innerRef={props.sponsorRef}>
            <Segment className={'sponsor-container'}>
                <h1>2020 NOHSL Sponsors</h1>
                <Grid relaxed centered>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>BSN Sports</p>
                            <Image centered verticalAlign='middle' fluid src={ImgBSN} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>Dick's Sporting Goods</p>
                            <Image centered verticalAlign='middle' fluid src={ImgDicks} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>Ganley Westside Subaru</p>
                            <Image centered verticalAlign='middle' fluid src={ImgGanley} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>Kessler Insurance Group</p>
                            <Image centered verticalAlign='middle' fluid src={ImgKessler} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>MK Automotive</p>
                            <Image centered verticalAlign='middle' fluid src={ImgMK} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>T&M Express Fleet</p>
                            <Image centered verticalAlign='middle' fluid src={ImgTM} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>VFW Post 7647</p>
                            <Image centered verticalAlign='middle' fluid src={ImgVFW} />
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle' width={3}>
                            <p>Yanok Law</p>
                            <Image centered verticalAlign='middle' fluid src={ImgYanok} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </Ref>
        
    )
}
