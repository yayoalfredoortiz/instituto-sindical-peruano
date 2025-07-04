import { useAuthStore } from '@/zustand/stores/auth.store';
import axios from 'axios'; 


const kmFitnessApi = axios.create({ 
    baseURL: process.env.NEXT_PUBLIC_MAIN_API_URL+`/api`
});

kmFitnessApi.interceptors.request.use(
    (config) => {

        const token = useAuthStore.getState().token;
        // console.log({token});

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    }
)



export {
    kmFitnessApi
}