import './App.css';
import { Segment, Ref } from 'semantic-ui-react';
import Layover from './img/layover2.jpg';
import './App.css';

export default function Contact(props){
    return(
        <Ref innerRef={props.contactRef}>
            <Segment className='contact-container' >
                <h3>NOHSL Mailing List</h3>
                <p>
                    Throughout the season, NOHSL emails information to our parents regarding clinics, events and information pertaining to your team. In order for you to receive this information, we'll need to keep your updated email address on file.
                    Please send an email to Tom Lazar to join or update your email address. Please note that when emails are sent out, they are "blind copied" to protect your privacy and your personal information is kept confidential.
                </p>
            </Segment>
        </Ref>
        
    )
}
