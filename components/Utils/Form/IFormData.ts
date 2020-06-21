import * as Yup from 'yup';

export interface IFormData {
    value: any;
    category: string;
    validation: Yup.Schema<any>
}