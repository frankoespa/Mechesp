import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useFirebaseAuthUtils } from './useFirebaseAuthUtils';
import { IViewModel } from '../interfaces/IViewModel';
import { useNotification } from './useNotification';

export const useApiManager = () => {
	const { showNotificationFail } = useNotification();
	const { GetTokenUser } = useFirebaseAuthUtils();

	let axios: AxiosInstance = Axios.create({
		baseURL: 'https://localhost:4000/api'
	});

	async function CreateRequestConfig(): Promise<AxiosRequestConfig> {
		let requestConfig: AxiosRequestConfig = {};

		await SetTokenRequest(requestConfig);

		return requestConfig;
	}

	async function SetTokenRequest(requestConfig: AxiosRequestConfig): Promise<void> {
		let token: string;

		token = await GetTokenUser();

		Object.assign(requestConfig, {
			headers: {
				['Authorization']: `Bearer ${token}`
			}
		});
	}

	async function Get<ResponseDataType extends IViewModel | IViewModel[]>(
		controllerName: string,
		actionName: string
	): Promise<ResponseDataType | ResponseDataType[]> {
		let requestConfig: AxiosRequestConfig;

		requestConfig = await CreateRequestConfig();

		try {
			const { data } = await axios.get<ResponseDataType>(`/${controllerName}/${actionName}`, requestConfig);
			return data;
		} catch (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
		}
    }
    
    async function Post<ResponseDataType extends IViewModel | IViewModel[]>(
		controllerName: string,
        actionName: string,
        body: IViewModel
	): Promise<ResponseDataType | ResponseDataType[]> {
		let requestConfig: AxiosRequestConfig;

		requestConfig = await CreateRequestConfig();

		try {
			const { data } = await axios.post<ResponseDataType>(`/${controllerName}/${actionName}`, body, requestConfig);
			return data;
		} catch (error) {
			if (error.response) {
				// The request was made and the server responded with a status code
				// that falls out of the range of 2xx
				console.log(error.response.data);
				console.log(error.response.status);
				console.log(error.response.headers);
			} else if (error.request) {
				// The request was made but no response was received
				// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
				// http.ClientRequest in node.js
				console.log(error.request);
			} else {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', error.message);
			}
			console.log(error.config);
		}
    }
    
    return {
        Get,
        Post
    }
};
