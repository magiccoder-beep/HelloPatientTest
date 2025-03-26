import axios, { AxiosInstance } from 'axios';
import { API_CONFIG } from './api.config';

export class ApiService {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_CONFIG.baseURL,
      headers: API_CONFIG.headers,
    });
  }
} 