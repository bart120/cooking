import ErrorModel from "../models/ErrorModel";

export default class BaseService {

    handleResponse(resp: Response): Promise<any | ErrorModel> {
        return resp.text().then(text => {
            const data = text && JSON.parse(text);
            if (!resp.ok) {
                const error: ErrorModel = { message: '' };
                error.message = (data && data.message) || resp.statusText;
                if (resp.status === 401) {
                    error.code = '401';
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