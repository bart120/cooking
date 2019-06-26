import { LoginModel } from "../models/LoginModel";
import conf from '../conf';

import BaseService from "./BaseService";


export default class UserService extends BaseService {

    login(model: LoginModel): Promise<any> {

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: 'sfont@exelcia-it.com', password: 'Wxcvbn123*' })
        }
        return fetch(conf.URL_TOKEN, requestOptions)
            .then(this.handleResponse);

    }

}