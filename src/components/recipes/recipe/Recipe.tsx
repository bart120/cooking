import React, { Component } from 'react';

export default class Recipe extends Component {
    state = {
        id: 0,
        name: ''
    };

    constructor(props: any) {
        super(props);
        console.log('constructor');
        const test: any = this.props;
        this.state = {
            id: test.match.params.id,
            name: test.match.params.name
        };
    }


    /*componentWillMount() {
        console.log('willMount');
        const test: any = this.props;
        this.setState({
            id: test.match.params.id,
            name: test.match.params.name
        });
    }*/

    componentWillReceiveProps() {
        console.log('receiveProps');

        const test: any = this.props;
        this.setState({
            id: test.match.params.id,
            name: test.match.params.name
        });
        console.log(this.state);
    }



    render() {
        console.log('render');
        console.log(this.state);
        return (
            <>
                <p>une recette</p>
                <h1>{this.state.name}</h1>
                <h2>{this.state.id}</h2>
            </>
        );
    }
}