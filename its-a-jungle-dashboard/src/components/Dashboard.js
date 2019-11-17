import React, { Component } from 'react'
import { Input, Label, Menu, List, Image, Table, Header, Icon, Dropdown } from 'semantic-ui-react'

import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            options: [
                { key: 'Creation time', text: 'Creation time', value: 'Creation time' },
                { key: 'Status', text: 'Status', value: 'Status' },
                { key: 'Priority', text: 'Priority', value: 'Priority' },
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
                                    <Icon name='fire extinguisher' />
                                    <Header.Content>
                                        Paloturvariski Finlandia talolla
              <Header.Subheader>Vanhentuneet palosammuttimet</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                            Vanhentuneet palosammuttimet aiheuttavat turvavaaran
                            </Table.Cell>
                            <Table.Cell>16.07.2018</Table.Cell>
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
                        <Table.Row >
                            <Table.Cell>
                                <Header as='h4' image>
                                <Icon name='trash' />
                                    <Header.Content>
                                        Roskia Kurvissa
              <Header.Subheader>Metroasemalla roskattu</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                Vapun jälkeinen sotkuisuus kaduilla
                            </Table.Cell>
                            <Table.Cell>03.05.2019</Table.Cell>
                            <Table.Cell>
                                    <Icon name='question circle' />
                                Started
                             </Table.Cell>
                            <Table.Cell>
                                <Label color='green' horizontal>
                                    Low
                                  </Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row >
                            <Table.Cell>
                                <Header as='h4' image>
                                <Icon name='hospital' />
                                    <Header.Content>
                                    Marian sairaala
              <Header.Subheader>Vesivahinko</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                2. kerroksessa vettä lattioilla
                            </Table.Cell>
                            <Table.Cell>16.08.2019</Table.Cell>
                            <Table.Cell>
                                <Icon name='cog' />
                                To do
                             </Table.Cell>
                            <Table.Cell>
                                <Label color='yellow' horizontal>
                                    Medium
                                  </Label>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                <Icon name='home' />
                                    <Header.Content>
                                        Töölön lastentarha
              <Header.Subheader>Sisäilmaongelma</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell>
                                Töölön lastentarhassa useat lapset valittaneet huonosta sisäilmasta
                            </Table.Cell>
                            <Table.Cell>                                12.06.2019
</Table.Cell>
                            <Table.Cell>
                                <Icon name='cog' />
                                To do
                             </Table.Cell>
                            <Table.Cell>
                                <Label color='red' horizontal>
                                    High
                                  </Label>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        )
    }
}