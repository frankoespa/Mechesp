import * as Yup from 'yup';
import { Messages } from '../global/Messages';

export const YupValidations = {
	Email: Yup.string().email(Messages.EmailInvalido),
	Password: Yup.string()
		.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, Messages.NoMatchPassword),
	Dni: Yup.string().length(8, Messages.DniInvalido)
};
