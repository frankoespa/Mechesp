import { useCallback } from 'react';
import { Field } from 'formik';
import { makeStyles, Theme } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';
import { Validator } from '../../../../../src/validations/Validator';

function CustomInput(props: TextFieldProps) {
	const {
		form: { setFieldValue, setFieldTouched },
		field: { name }
	} = props;

	const onChange = useCallback(
		(event) => {
			const { value } = event.target;
			setFieldTouched(name, true, false);
			Validator.JustLetters(name, value, setFieldValue, setFieldTouched);
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

export default function TextInput(props: IProps) {
	const classes = useStyles(props);
	const { name, label, disabled } = props;

	return (
		<Field
			component={CustomInput}
			name={name}
			type='text'
			label={label}
			variant='outlined'
			fullWidth
			classes={{ root: classes.rootInput }}
			InputProps={{ className: classes.textInput }}
			disabled={disabled}
		/>
	);
}