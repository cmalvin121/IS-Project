import axios from 'axios';

const {baseURL} = 'https://testing-purposes-4aaca-default-rtdb.asia-southeast1.firebasedatabase.app/';

const service = axios.create({
    baseURL,
    timeout: 10000,
    proxyHeaders: false,
    credentials: false,
});

export default async function api(url,data,method = 'post', params ={}) {
    const headers = {};
    const result = await service.request({
        method,url,data,params,headers
    });
    return result;
}