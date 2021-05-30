import React from 'react';
import { Button, Segment, Ref } from 'semantic-ui-react';

export default function TeamSnap (props) {
    return(
        <Ref innerRef={props.teamRef}>
            <Segment className={"teamsnap-container"}>
                <h1>TeamSnap</h1>
                <p>Registration for the 2021 season is now open! </p>
                <p>Registration for the following year traditionally opens during North Olmsted's Homecoming Weekend.</p>
                <Button floated="right">
                    <a href="https://go.teamsnap.com/forms/247033/signups">
                        TeamSnap Registration
                    </a>
                </Button>
            </Segment>
        </Ref>
    )
}
