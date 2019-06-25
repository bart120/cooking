import { LoginModel } from "../models/LoginModel";
import conf from '../conf';

export default class UserService {

    login(model: LoginModel): Promise<any> {

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: 'sfont@exelcia-it.com', password: 'Wxcvbn123*' })
        }
        return fetch(conf.URL_TOKEN, requestOptions)
            .then(resp => resp.text());
        
    }

}