import * as Yup from 'yup';
import { Messages } from '../global/Messages';

export const YupValidations = {
			Email: Yup.string().email(Messages.EmailInvalido).required(Messages.Requerido),
			Password: Yup.string()
				.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, Messages.NoMatchPassword)
				.required(Messages.Requerido)
		};