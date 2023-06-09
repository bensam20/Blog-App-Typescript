import axios from 'axios';
import { Blog } from '../context/BlogContext';

const baseUrl = 'https://crudcrud.com/api/cf512ea8df8f4eec87b72804d8ed8a44';

export const postReq = (url: string, data: Blog) => {
    axios.post(baseUrl + url, data)
        .then(function (response) {
            console.log(response);
            return response
        })
        .catch(function (error) {
            console.log(error);
            return error
        });
}

interface GetRequestData {
    ID: string;
}

export const getAllReq = (url: string):any => {
    axios.get(baseUrl + url)
        .then(function (response) {
            console.log(response.data);
            return response
        })
        .catch(function (error) {
            console.log(error);
            return error
        });
}

export const getOneReq = (url: string, data: GetRequestData) => {
    axios.get(baseUrl + url + `/${data.ID}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const delReq = (url: string, data?: GetRequestData) => {
    axios.delete(baseUrl + url + `/${data?.ID}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const editReq = (url: string, data?: GetRequestData, payload?: Blog) => {
    axios.put(baseUrl + url + `/${data?.ID}`, payload)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}