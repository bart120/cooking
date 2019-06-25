import React, { Component } from 'react';
import { LoginModel } from '../../../models/LoginModel';
import { IState } from '../../../models/IState';
import { TextField, Checkbox, Button } from '@material-ui/core';
import EmailField from '../../fields/EmailField';
import UserService from '../../../services/UserService';


interface LoginState extends LoginModel {
    rememberMe: boolean;
    token?: string
}

export default class Login extends Component<{}, LoginState & IState> {

    private service: UserService = new UserService();

    constructor(props: any) {
        super(props);
        this.state = {
            login: '',
            password: '',
            rememberMe: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckChange = this.handleCheckChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e: any): void {
        e.preventDefault();
        //console.log(this.state);
        this.service.login(this.state as LoginModel).then(
            text => {
                const data = JSON.parse(text);
                console.log(data);
                this.setState({ token: data.token });
            }
        ).catch(
            err => alert(err)
        );
        console.log('apres service.login');
    }

    handleChange(e: any): void {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleCheckChange(e: any): void {
        const { name, checked } = e.target;
        this.setState({ [name]: checked });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="container" noValidate>

                <EmailField label="Login" name="Login" onChange={this.handleChange} />
                <br />
                <TextField label="Mot de passe" type="password" name="password" onChange={this.handleChange} className="textField" />

                <br />
                <label>Se souvenir de moi</label>
                <Checkbox checked={this.state.rememberMe} onChange={this.handleCheckChange} color="primary" />
                <br />
                <Button type="submit">OK</Button>
                <p>{this.state.token}</p>
            </form>

        );
    }
}