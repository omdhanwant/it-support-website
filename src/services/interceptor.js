import Axios from 'axios'


Axios.defaults.headers.common.Accept = 'application/json';

// Add a response interceptor
Axios.interceptors.response.use((response) => {
    // Do something with response data

    return response;
}, function(error) {
    // Do something with response error
    // const response = error.response;

    // if (response.status === 403) {
    //     Security.logout()
    // }

    return Promise.reject(error);
});

// Add a request interceptor
Axios.interceptors.request.use((config) => {
    // Do something before request is sent
    // const tokenObj = Security.getTokenObject();
    // config.withCredentials = false;
    // config.headers['hk-token'] = tokenObj.token
    // config.headers['hk-info'] = tokenObj.info


    return config;
}, function(error) {
    // Do something with request error

    return Promise.reject(error);
});
