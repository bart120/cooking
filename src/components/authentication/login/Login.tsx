import React, { Component } from 'react';
import { LoginModel } from '../../../models/LoginModel';
import { IState } from '../../../models/IState';


interface LoginState extends LoginModel {
    rememberMe: string;
}

export default class Login extends Component<{}, LoginState & IState> {

    constructor(props: any) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any): void {
        e.preventDefault();
        console.log(this.state);
    }

    handleChange(e: any): void {
        //console.log(e.target.value);
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                <input type="text" placeholder="mail" name="login" />
                <br />
                <input type="password" placeholder="mot de passe" name="password" />
                <br />
                <input type="checkbox" name="rememberMe" /> Se souvenir de moi
                <br />
                <button type="submit">OK</button>
            </form>
        );
    }
}