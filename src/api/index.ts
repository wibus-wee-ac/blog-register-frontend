import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
});

interface MainFormData {
  name: string;
  sex: boolean;
  blog_name: string;
  blog_url: string;
  qq: string;
  email: string;
  is_student: boolean;
  grade: number;
  do_dev: boolean;
  github?: string;
  dev_stack?: string;
}

export const sendMainForm = (data: MainFormData) => service.post('/user', data);

export const getUserByReceipt = (key: string) => service.get(`/user/?key=${key}`);

export const getPassedUsers = () => service.get('/users-pass');
