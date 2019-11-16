import React from "react";
import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Grid } from 'semantic-ui-react'

import './index.css'
import Dashboard from './components/Dashboard';
import IssueMap from './components/IssueMap';
import Navigator from './components/Navigator';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <Grid columns={1} padded style={{ height: '100vh', width: '100vw' }}>
                        <Grid.Row verticalAlign="top" style={{ height: '10%', width: '100vw' }}>
                            <Grid.Column>
                                <Navigator />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row verticalAlign="top" style={{ height: '90%', width: '100vw' }}>
                            <Grid.Column>
                                <div>
                                    <Switch>
                                        <Route path="/">
                                            <Dashboard />
                                        </Route>
                                    </Switch>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Router>
            </div>
        )
    };
}

export default App;