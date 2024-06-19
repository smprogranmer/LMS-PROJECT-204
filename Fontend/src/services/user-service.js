import { myAxios } from "./helper"

// export const login = async (userData) =>{
//     try {
//         const response = await myAxios.post('users/login', userData);
//         console.log("🚀 ~ login ~ response:", response.data)
//         localStorage.setItem('token', response.data.token);
//       } catch (error) {
//         console.error(error.response.data);
//       }
// }

export const login = async (userData) =>{
  const res = await myAxios.post('users/login',userData)
  return res
}

export const singUp = async (userData) => {
  const res = await myAxios.post('users/register',userData)
  return res
}
export const forgetPassword = async (userData) => {
  const res = await myAxios.put('me/change-password',userData)
  return res
}

export const logOut = async (userData) => {
  const res = await myAxios.post('users/logout',userData)
  return res
}


// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://your-backend-url.com',
// });

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default api;

// import api from './api';

// const login = async (email, password) => {
//   try {
//     const response = await api.post('/api/login', { email, password });
//     localStorage.setItem('token', response.data.token);
//   } catch (error) {
//     console.error(error.response.data);
//   }
// };

// const getData = async () => {
//   try {
//     const response = await api.get('/api/data');
//     console.log(response.data);
//   } catch (error) {
//     console.error(error.response.data);
//   }
// };

// login('john.doe@example.com', 'password123');
// getData();

