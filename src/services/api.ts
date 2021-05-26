import axios from 'axios';

const api = axios.create({
  baseURL: 'https://calculadora-imc-dd0de.uc.r.appspot.com/',
});

export default api;
