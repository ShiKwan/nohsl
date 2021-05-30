import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export const TeamCard = ({ coachClass, coachName, scheduleUrl }) => (
  <Card className='team-container'>
    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{coachName}</Card.Header>
      <Card.Description>
        {coachClass}
      </Card.Description>
    </Card.Content>
    <Card.Content extra >
        <Button size='small' className='team-schedule-button'>
            <a target="_blank" href={scheduleUrl}>
                View Schedule
            </a>
        </Button>
    </Card.Content>
  </Card>
)
