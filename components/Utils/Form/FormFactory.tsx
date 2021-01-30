import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
import { IViewModel } from '../../../src/base/IViewModel';
import { IValidation } from '../../../src/validations/IValidation';

interface IProps {
	children: (formUtils: FormikProps<IViewModel>) => JSX.Element | JSX.Element[];
	initialValues: IViewModel;
	validations: IValidation;
	onSubmit: (values: IViewModel, form: FormikHelpers<IViewModel>) => void;
}

export default function FormFactory(props: IProps) {
	const { children, initialValues, validations, onSubmit } = props;

	const onSubmitForm = async (values: IViewModel, formikHelpers: FormikHelpers<IViewModel>) => {
		await onSubmit(values, formikHelpers);
	};

	return (
		<Formik enableReinitialize={true} initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={Yup.object().shape(validations)}>
			{(formUtils) => (
				<Form translate='yes' noValidate autoComplete='off' style={{ width: '100%' }}>
					{children(formUtils)}
				</Form>
			)}
		</Formik>
	);
}
