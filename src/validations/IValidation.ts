import * as Yup from 'yup';

export interface IValidation {
	[propName: string]: Yup.Schema<any>;
}
