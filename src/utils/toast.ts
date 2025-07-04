import { toast } from 'react-toastify';

export const toastSuccess = (message: string) => {
  toast.success(message, {
    position: 'top-center', 
    //className: 'bg-green-600 text-white', // Agrega estilos si lo deseas
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    position: 'top-center', 
    //className: 'bg-red-600 text-white',
  });
};
