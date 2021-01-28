import { TextFieldProps, fieldToTextField } from 'formik-material-ui';
import MuiTextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import { makeStyles, Theme } from '@material-ui/core';
import { useCallback } from 'react';
import { Validator } from '../../../../../src/validations/Validator';
import { IPropsInput } from '../IPropsInput';

function CustomInput(props: TextFieldProps) {
	const {
		form: { setFieldValue, setFieldTouched },
		field: { name }
	} = props;

	const onChange = useCallback(
		(event) => {
			const { value } = event.target;
			Validator.NotSpaces(name, value, setFieldValue, setFieldTouched);
		},
		[setFieldValue, name]
	);

	return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}

const useStyles = makeStyles((theme: Theme) => ({
	textInput: {
		color: theme.palette.text.secondary
	},
	rootInput: {
		marginBottom: theme.spacing(3),
		'& .MuiOutlinedInput-root': {
			'&:hover fieldset': {
				borderColor: 'inherit'
			}
		}
	}
}));

export default function PasswordInput(props: IPropsInput) {
	const classes = useStyles(props);
	const { name, label, disabled, size } = props;

	return (
		<Field
			component={CustomInput}
            name={name}
            size= {size ? size : 'small'}
			type='password'
			label={label}
			variant='outlined'
			fullWidth
			classes={{ root: classes.rootInput }}
			InputProps={{ className: classes.textInput }}
			disabled={disabled}
		/>
	);
}
