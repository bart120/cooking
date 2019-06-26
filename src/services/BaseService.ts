import ErrorModel from "../models/ErrorModel";
import UserModel from "../models/UserModel";
import Header from "../components/layout/header/Header";

export default class BaseService {

    getRequestOptions(method: string = 'GET', body?: any): RequestInit {
        const options: RequestInit = {
            method: method,
            headers: { 'Content-Type': 'application/json' },
        }
        if (body) {
            options.body = JSON.stringify(body);
        }
        if (sessionStorage.getItem('USER')) {
            const user: UserModel = JSON.parse(sessionStorage.getItem('USER') as string);
            options.headers = Object.assign(options.headers, { 'Authorization': `Bearer ${user.token}` });
        }
        return options;
    }

    handleResponse(resp: Response): Promise<any | ErrorModel> {
        return resp.text().then(text => {
            const data = text && JSON.parse(text);
            if (!resp.ok) {
                const error: ErrorModel = { message: '' };
                error.message = (data && data.message) || resp.statusText;
                if (resp.status === 401) {
                    error.code = '401';
                    console.log(error.code);
                }

                if (resp.status === 404) {
                    error.code = '404';
                }
                return Promise.reject(error);
            }
            return Promise.resolve(data);
        });
    }
}