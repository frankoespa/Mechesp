import { ReactText } from "react";

export interface INotificationManager {
	showNotificationSuccess: (message: string) => ReactText;
	showNotificationFail: (message: string) => ReactText;
	showNotificationAlert: (message: string) => ReactText;
	closeNotification: (key?: ReactText) => void;
}