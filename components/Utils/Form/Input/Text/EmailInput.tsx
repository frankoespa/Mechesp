import {  TextFieldProps, fieldToTextField } from 'formik-material-ui';
import MuiTextField from '@material-ui/core/TextField';
import { Field } from 'formik';
import { makeStyles, Theme } from '@material-ui/core';
import { useCallback } from 'react';
import { Validator } from '../../../../../src/validations/Validator';

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

interface IProps {
	name: string;
	label: string;
	disabled: boolean;
}

export default function EmailInput(props: IProps) {
	const classes = useStyles(props);
	const { name, label, disabled } = props;

	return (
		<Field
			component={CustomInput}
			name={name}
			type='email'
			label={label}
			variant='outlined'
			fullWidth
			classes={{ root: classes.rootInput }}
			InputProps={{ className: classes.textInput }}
			disabled={disabled}
		/>
	);
}
