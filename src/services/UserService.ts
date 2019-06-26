import { LoginModel } from "../models/LoginModel";
import conf from '../conf';

import BaseService from "./BaseService";
import jwtDecode from "jwt-decode";
import UserModel from "../models/UserModel";


export default class UserService extends BaseService {

    login(model: LoginModel): Promise<any> {

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: 'sfont@exelcia-it.com', password: 'Wxcvbn123*' })
        }
        return fetch(conf.URL_TOKEN, requestOptions)
            .then(this.handleResponse)
            .then(data => {
                const token = data.token;
                const decoded: any = jwtDecode(token);
                const user: UserModel = { token: token, login: decoded.login, admin: decoded.admin };

                sessionStorage.setItem('USER', JSON.stringify(user));
                // console.log(data);
                // this.setState({ token: data.token });
                return data;
            });

    }

}