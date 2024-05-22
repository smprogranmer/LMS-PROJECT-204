// how to use axios in react lke prodution lavel ?
import axios from 'axios'
export const myAxios = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  