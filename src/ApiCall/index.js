/* Constants */
import { GET_METHOD, POST_METHOD, API_KEY, SECRET_KEY, } from '../Utilities/Constants';

/* Functions */
import { getToken, joinQueryStringsToUrl } from '../Utilities/Functions';

export default async function apiCall(url, method, data) {

    if (method === POST_METHOD) {

        let formData = new FormData();
        formData.append('grant_type', 'client_credentials');
        formData.append('client_id', API_KEY);
        formData.append('client_secret', SECRET_KEY);

        return await fetch(url, {
            method,
            body: formData,
        }).then(response => response.json());

    } else if (method === GET_METHOD) {

        let token = getToken();

        let newUrl = new URL(url);
        if (data) {
            newUrl = joinQueryStringsToUrl(url, data);
        }

        return await fetch(newUrl, {
            method,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => response.json());

    }
}
