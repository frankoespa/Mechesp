import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import React from 'react';
import PanelExpanded from '../../../components/Utils/Sections/PanelExpanded';
import FormFactory from '../../../components/Utils/Form/FormFactory';
import { Labels } from '../../../src/global/Labels';
import { YupValidations } from '../../../src/validations/YupValidations';
import EmailInput from '../../../components/Utils/Form/Input/Text/EmailInput';
import PrimaryButton from '../../../components/Utils/Button/PrimaryButton';
import { useApiManager } from '../../../src/hooks/useApiManager';

const useStyles = makeStyles((theme: Theme) => ({}));

interface IProps {}

function Administrar(props: IProps) {
    const classes = useStyles(props);
    const {} = useApiManager()

	return (
		<Box>
			<PanelExpanded title='Filtro'>
				<FormFactory
					initialValues={{
						[Labels.Email]: '',
						[Labels.Password]: ''
					}}
					validations={{
						[Labels.Email]: YupValidations.Email
					}}
					onSubmit={() => console.log('buscando')}>
					{(form) => (
						<>
							<Grid container spacing={5}>
								<Grid item xs={4}>
									<EmailInput name={Labels.Email} label={Labels.Email} disabled={false} size='small'></EmailInput>
								</Grid>
								<Grid item xs={4}></Grid>
								<Grid item xs={4}></Grid>
							</Grid>
							<Grid container direction='row-reverse' spacing={5}>
								<Grid item>
									<PrimaryButton
										text={Labels.Buscar}
										disabled={form.isSubmitting || !form.isValid}
										onClick={form.submitForm}
										typeSubmit
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
