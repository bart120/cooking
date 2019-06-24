import React from "react";

import Header from './header/Header';
import { Router } from "react-router";
// import Home from "../home/Home";
import { createBrowserHistory } from "history";
import { Container } from "@material-ui/core";
import './Layout.css';
const browserHistory = createBrowserHistory();

export default class Layout extends React.Component {


    render = () => {
        return (
            <div>
                <Header />
                <Container className='Bar'>
                    <Router history={browserHistory}>
                        {this.props.children}
                    </Router>
                </Container>

            </div>
        )
    };
}