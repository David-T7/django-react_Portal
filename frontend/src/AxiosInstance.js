import axios from "axios";
const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;
const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});
// Request interceptor
AxiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    }
    , (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
AxiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest.retry) {
            originalRequest.retry = true;
            try {
                const response = await AxiosInstance.post('/token/refresh/', {
                    refresh: localStorage.getItem('refreshToken'),
                });
                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);
                console.log('Token refreshed successfully', response.data);
                return AxiosInstance(originalRequest);
            } catch (refreshError) {
                console.error('Error refreshing token:', refreshError.response.data);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);


export default AxiosInstance;

