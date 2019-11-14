import React, { Component } from 'react';
import Button from 'reactstrap/lib/Button';
import {RouteComponentProps, withRouter} from "react-router";

class Home extends Component<RouteComponentProps> {

    constructor(props: RouteComponentProps) {
        super(props);
    }

    handleNavigateStart() {
        this.props.history.push("/adventure");
    }

    render() {
        return (
            <div>
                <div>Wellcome to your Dungeons & Dragons adventure</div>
                <div>Press the button to generate your first adventure</div>
                <Button onClick={() => this.handleNavigateStart()}>
                </Button>
            </div>)
    }
};


export default withRouter(Home);