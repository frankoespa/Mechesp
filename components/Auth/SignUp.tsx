
import FormFactory from '../Utils/Form/FormFactory';
import { Labels } from '../../src/global/Labels';
import { YupValidations } from '../../src/validations/YupValidations';
import EmailInput from '../Utils/Form/Input/Text/EmailInput';
import PasswordInput from '../Utils/Form/Input/Text/PasswordInput';
import PrimaryButton from '../Utils/Button/PrimaryButton';
import { IUserSignin } from '../../src/interfaces/auth/IUserSignin';
import { FormikHelpers } from 'formik';
import { useFirebaseAuthUtils } from '../../src/hooks/useFirebaseAuthUtils';
import TextInput from '../Utils/Form/Input/Text/TextInput';

export function SignUp(): JSX.Element {
	const { SignIn } = useFirebaseAuthUtils();

	const onSubmitSignUp = async (userSignin: IUserSignin, formikHelpers: FormikHelpers<IUserSignin>) => {
		await SignIn(userSignin);
	};

	return (
		<FormFactory
			initialValues={{
				[Labels.Nombre]: '',
				[Labels.Apellido]: '',
				[Labels.Email]: '',
				[Labels.Password]: ''
			}}
			validations={{
				[Labels.Email]: YupValidations.Email,
				[Labels.Password]: YupValidations.Password
			}}
			onSubmit={onSubmitSignUp}>
			{(form) => (
				<>
					<TextInput name={Labels.Nombre} label={Labels.Nombre} disabled={form.isSubmitting} />
					<TextInput name={Labels.Apellido} label={Labels.Apellido} disabled={form.isSubmitting} />
					<EmailInput name={Labels.Email} label={Labels.Email} disabled={form.isSubmitting}></EmailInput>
					<PasswordInput name={Labels.Password} label={Labels.Password} disabled={form.isSubmitting}></PasswordInput>
					<PrimaryButton text={Labels.CrearCuenta} disabled={form.isSubmitting || !form.isValid} onClick={form.submitForm} typeSubmit />
				</>
			)}
		</FormFactory>
	);
}
