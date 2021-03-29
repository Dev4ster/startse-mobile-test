import axios from 'axios';
import env from 'react-native-config';

console.log('env', env);
const api = axios.create({
  baseURL: env.BASE_URL,
});

export default api;
