import FormFactory from '../Utils/Form/FormFactory';
import { Labels } from '../../src/global/Labels';
import { YupValidations } from '../../src/validations/YupValidations';
import EmailInput from '../Utils/Form/Input/Text/EmailInput';
import PasswordInput from '../Utils/Form/Input/Text/PasswordInput';
import PrimaryButton from '../Utils/Button/PrimaryButton';
import { IUserSignin } from '../../src/interfaces/auth/IUserSignin';
import { FormikHelpers } from 'formik';
import { useFirebaseAuthUtils } from '../../src/hooks/useFirebaseAuthUtils';
import { useRouter } from 'next/router';

export function SignIn(): JSX.Element {
    const { SignIn } = useFirebaseAuthUtils();
    const router = useRouter();

	const onSubmitSignIn = async (userSignin: IUserSignin, formikHelpers: FormikHelpers<IUserSignin>) => {
        await SignIn(userSignin);
        router.push('/dashboard/usuarios/administrar')
	};

	return (
		<FormFactory
			initialValues={{
				[Labels.Email]: '',
				[Labels.Password]: ''
			}}
			validations={{
				[Labels.Email]: YupValidations.Email
				// [Labels.Password]: YupValidations.Password
			}}
			onSubmit={onSubmitSignIn}>
			{(form) => (
				<>
					<EmailInput name={Labels.Email} label={Labels.Email} disabled={form.isSubmitting}></EmailInput>
					<PasswordInput name={Labels.Password} label={Labels.Password} disabled={form.isSubmitting}></PasswordInput>
					<PrimaryButton text={Labels.Ingresar} disabled={form.isSubmitting || !form.isValid} onClick={form.submitForm} typeSubmit />
				</>
			)}
		</FormFactory>
	);
}
