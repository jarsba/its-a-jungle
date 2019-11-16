import React, { Component } from 'react'
import { Input, Label, Menu, List, Image, Table, Header, Icon, Dropdown } from 'semantic-ui-react'

import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            options: [
                { key: 'angular', text: 'Angular', value: 'angular' },
                { key: 'css', text: 'CSS', value: 'css' },
                { key: 'design', text: 'Graphic Design', value: 'design' },
                { key: 'ember', text: 'Ember', value: 'ember' },
                { key: 'html', text: 'HTML', value: 'html' },
                { key: 'ia', text: 'Information Architecture', value: 'ia' },
                { key: 'javascript', text: 'Javascript', value: 'javascript' },
                { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
                { key: 'meteor', text: 'Meteor', value: 'meteor' },
                { key: 'node', text: 'NodeJS', value: 'node' },
                { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
                { key: 'python', text: 'Python', value: 'python' },
                { key: 'rails', text: 'Rails', value: 'rails' },
                { key: 'react', text: 'React', value: 'react' },
                { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
                { key: 'ruby', text: 'Ruby', value: 'ruby' },
                { key: 'ui', text: 'UI Design', value: 'ui' },
                { key: 'ux', text: 'User Experience', value: 'ux' },
            ],
        }
    }

    fetchData = () => {
        axios.get("localhost:5000/api/issues").then(response => {
            console.log(response)
            this.setState({
                data: response,
            })
        });
    }

    render() {
        return (
            <div>
                <Dropdown placeholder='Order by' clearable selection options={this.state.options} />
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Issue</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Creation time</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                            <Table.HeaderCell>Priority</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row positive>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                                    <Header.Content>
                                        Lena
              <Header.Subheader>Human Resources</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                22
                            </Table.Cell>
                            <Table.Cell>22</Table.Cell>
                            <Table.Cell>
                                <Icon name='checkmark' />
                                Done
                             </Table.Cell>
                            <Table.Cell>
                                <Label color='red' horizontal>
                                    High
                                  </Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                                    <Header.Content>
                                        Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>15</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                                    <Header.Content>
                                        Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>12</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                                    <Header.Content>
                                        Mark
              <Header.Subheader>Executive</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>11</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}