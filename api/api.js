import Axios from 'axios';
import { baseUrl } from '../constants/baseURL';
const axiosInstance = Axios.create({
  baseURL: baseUrl,
});
export default axiosInstance;
