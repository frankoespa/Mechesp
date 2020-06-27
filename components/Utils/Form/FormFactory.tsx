import { makeStyles, Theme } from '@material-ui/core';
import { Formik, Form, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) => ({}));

interface IProps {
	children: (formUtils: FormikProps<ViewModel>) => JSX.Element | JSX.Element[];
	initialValues: ViewModel;
	validations: Validation;
	onSubmit: (values: ViewModel, form: FormikHelpers<ViewModel>) => void;
}

interface ViewModel {
	[propName: string]: number | string | Date;
}

interface Validation {
	[propName: string]: Yup.Schema<any>;
}

export default function FormFactory(props: IProps) {
	const classes = useStyles(props);
	const { children, initialValues, validations, onSubmit } = props;

	return (
		<Formik
			initialStatus={false}
			enableReinitialize={true}
			initialValues={initialValues}
			onSubmit={async (values, formikHelpers) => {
				formikHelpers.setSubmitting(true);
				try {
                    await onSubmit(values, formikHelpers);
                    formikHelpers.setStatus(true);
                } catch (e) {
                    console.log(e);
                }
			}}
			validationSchema={Yup.object().shape(validations)}>
			{(formUtils) => (
				<Form translate='yes' noValidate autoComplete='off'>
					{children(formUtils)}
				</Form>
			)}
		</Formik>
	);
}
