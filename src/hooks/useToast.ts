import { toast } from 'react-toastify';

interface UseToastReturn {
  notifyError: (msg: string) => void;
}

export const useToast = (): UseToastReturn => {
  const notifyError = (msg: string) => {
    toast.error(msg, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return { notifyError };
};
