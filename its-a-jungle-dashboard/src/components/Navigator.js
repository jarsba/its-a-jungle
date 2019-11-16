import React, { Component } from 'react'

import {
    Link
} from "react-router-dom";

import { Input, Label, Menu, Icon, Sidebar, Segment } from 'semantic-ui-react'

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: true,
        }
    }

    state = { activeItem: 'inbox' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem, visible } = this.state

        return (
            <Segment inverted>
              <Menu inverted pointing >
                <Menu.Item
                    as={Link} to='/'
                    name='dashboard'
                    active={activeItem === 'dashboard'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='chart line' />
                    Dashboard
                </Menu.Item>

                {/* <Menu.Item
                    as={Link} to='/map'
                    name='map'
                    active={activeItem === 'map'}
                    onClick={this.handleItemClick}
                >
                    <Icon name='map' />
                    Map
                </Menu.Item> */}
                </Menu>
            </Segment>

        )
    }
}

export default Navigator