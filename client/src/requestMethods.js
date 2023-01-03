import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzczYmVlZjk5ODMxMTNlNmMyY2QyZjIiLCJpYXQiOjE2Njg2MTk1MDMsImV4cCI6MTY2ODg3ODcwM30.q07meGaWiC6uB7y2mwH2g5aexFWamVYUnCq1rkaE1W4";
// const TOKEN = (JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.token)
export const publicRequest = axios.create({
     baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});