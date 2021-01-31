import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { PanelExpanded } from '../../../components/Utils/Sections/PanelExpanded';
import FormFactory from '../../../components/Utils/Form/FormFactory';
import { Labels } from '../../../src/global/Labels';
import { YupValidations } from '../../../src/validations/YupValidations';
import EmailInput from '../../../components/Utils/Form/Input/Text/EmailInput';
import PrimaryButton from '../../../components/Utils/Button/PrimaryButton';
import { useApiManager } from '../../../src/hooks/useApiManager';
import { FormikHelpers } from 'formik';
import TextInput from '../../../components/Utils/Form/Input/Text/TextInput';
import TextNumberInput from '../../../components/Utils/Form/Input/Text/TextNumberInput';
import { IFindUsers } from '../../../src/areas/users/IFindUsers';

const useStyles = makeStyles((theme: Theme) => ({}));

interface IProps {}

function Administrar(props: IProps) {
	const classes = useStyles(props);
	const { Post } = useApiManager();
	const Buscar = async (values: IFindUsers, formikHelpers: FormikHelpers<IFindUsers>) => {
		await Post('users', 'find', values);
	};

	return (
		<Box>
			<PanelExpanded title={Labels.Filtro}>
				<FormFactory
					initialValues={{
						[Labels.Email]: '',
						[Labels.Dni]: '',
						[Labels.Nombre]: ''
					}}
					validations={{
						[Labels.Email]: YupValidations.Email,
						[Labels.Dni]: YupValidations.Dni
					}}
					onSubmit={Buscar}>
					{(form) => (
						<>
							<Grid container spacing={5}>
								<Grid item xs={4}>
									<EmailInput name={Labels.Email} label={Labels.Email} disabled={false} size='small'></EmailInput>
								</Grid>
								<Grid item xs={4}>
									<TextNumberInput name={Labels.Dni} label={Labels.Dni} disabled={false} size='small'></TextNumberInput>
								</Grid>
								<Grid item xs={4}>
									<TextInput name={Labels.Nombre} label={Labels.Nombre} disabled={false} size='small'></TextInput>
								</Grid>
							</Grid>
							<Grid container direction='row-reverse' spacing={1}>
								<Grid item>
									<PrimaryButton
										text={Labels.Buscar}
										disabled={!form.isValid || Object.values(form.values).every((f) => !f)}
										typeSubmit
										size='medium'
									/>
								</Grid>
							</Grid>
						</>
					)}
				</FormFactory>
			</PanelExpanded>
		</Box>
	);
}

export default Administrar;
