import { useSnackbar } from 'notistack';
import { INotificationManager } from '../interfaces/notifications/INotificationManager';

export const useNotification = (): INotificationManager => {
    const { enqueueSnackbar: showNotification, closeSnackbar: closeNotification } = useSnackbar();
    
    const showNotificationSuccess = (message: string) => {
        return showNotification(message, {
			variant: 'success'
		});
    }

    const showNotificationFail = (message: string) => {
		return showNotification(message, {
			variant: 'error'
		});
    };
    
    const showNotificationAlert = (message: string) => {
		return showNotification(message, {
			variant: 'warning'
		});
    };
    
    return {
		showNotificationSuccess,
		showNotificationFail,
		showNotificationAlert,
		closeNotification
	};
};
