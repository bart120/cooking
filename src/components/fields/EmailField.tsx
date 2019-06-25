import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

interface EmailFieldProps {
    name: string;
    required?: boolean;
    label?: string;
    placeholder?: string;
    value?: any;
    onChange(e: any): void;
}

interface EmailFieldState {
    value: string;
    message: string;
}

export default class EmailField extends Component<EmailFieldProps, EmailFieldState> {

    constructor(props: any) {
        super(props);
        this.state = { value: '', message: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: any): void {
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (reg.test(e.target.value)) {
            this.setState({ message: `` });
            this.props.onChange(e);
        } else {
            this.setState({ message: `Erreur sur l'adresse mail` });
        }

    }

    render() {
        return (
            <>
                <TextField
                    type="email"
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    value={this.props.value}
                    onChange={this.handleChange}
                    label={this.props.label}
                />
                <span>{this.state.message}</span>
            </>
        );
    }
}