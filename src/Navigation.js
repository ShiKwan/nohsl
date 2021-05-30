import React, { Component, useRef } from 'react'
import { Menu, Sticky, Ref } from 'semantic-ui-react'
import './App.css';

export default function Navigation (props){
    
    return(
        <div>
            <Sticky context={props.contextRef}>
                <Menu 
                    widths='6' color='orange'
                    attached='top'
                    tabular
                >
                    <Menu.Item
                    name='upcomingEvents'
                    className='menu-item'
                    onClick={() => 
                        props.executeMissionScroll()
                    }
                    >
                    Mission Statement
                    </Menu.Item>

                    <Menu.Item
                    name='upcomingEvents'
                    className='menu-item'
                    onClick={() => 
                        props.executeFieldConditionScroll()
                    }
                    >
                    Field Condition
                    </Menu.Item>

                    <Menu.Item
                    name='editorials'
                    className='menu-item'
                    onClick={() => 
                        props.executeGameScheduleScroll()
                    }
                    >
                    Teams
                    </Menu.Item>

                    <Menu.Item
                    name='upcomingEvents'
                    className='menu-item'
                    onClick={() => 
                        props.executeTeamsScroll()
                    }
                    >
                    Team Snap
                    </Menu.Item>

                    <Menu.Item
                    name='reviews'
                    className='menu-item'
                    onClick={() => 
                        props.executeSponsorScroll()
                    }
                    >
                    Sponsors
                    </Menu.Item>
                    
                    <Menu.Item
                    name='upcomingEvents'
                    className='menu-item'
                    onClick={()=>
                        props.executeContactScroll()
                    }
                    >
                    Contact Us
                    </Menu.Item>
                </Menu>
            </Sticky>
        </div>
    );
}

