import { Segment, Image, Grid, Ref } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import VertImage from './img/vertical-layover.jpg';
import TemperatureWidget from './TemperatureWidget';
import './App.css';
export default function FieldCondition(props){
    return(
        <Ref innerRef={props.fieldConditionRef}>
            <Segment className={'field-condition-container'}>
                <Grid>
                    <Grid.Column width={16} verticalAlign={'middle'}>
                        <h1>Field Condition</h1>

                        <p>Check our partner website where field conditions are updated regularly. 
                        NOHSL Managers send updates via TeamSnap.
                        <a href="http://www.teamsideline.com/northolmsted">North Olmsted Recreation Center</a>
                        </p>
                        <TemperatureWidget />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Ref>
        
    )
}
