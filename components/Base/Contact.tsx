import { makeStyles, Theme, Box, Container, Grid, LinearProgress, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Section from '../Utils/Sections/Section';
import SecondTitle from '../Utils/Text/SecondTitle';
import TextInput from '../Utils/Form/Input/Text/TextInput';
import EmailInput from '../Utils/Form/Input/Text/EmailInput';
import TextAreaInput from '../Utils/Form/Input/Text/TextAreaInput';
import DoneIcon from '@material-ui/icons/Done';
import RoomIcon from '@material-ui/icons/Room';
import PrimaryText from '../Utils/Text/PrimaryText';
import PrimaryButton from '../Utils/Button/PrimaryButton';
import InfoTitle from '../Utils/Text/InfoTitle';
import WhatsapIcon from '@material-ui/icons/WhatsApp';
import SheduleIcon from '@material-ui/icons/Schedule';
import { Global } from '../../src/global/Global';
import { green } from '@material-ui/core/colors';
import MailSender from 'emailjs-com';
import FormFactory from '../Utils/Form/FormFactory';
import { Labels } from '../../src/global/Labels';
import { Messages } from '../../src/global/Messages';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light,
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	doneIcon: {
		color: green[500],
		verticalAlign: 'bottom',
		marginRight: theme.spacing(1)
	}
}));

interface IProps {}

interface ViewModel {
    [propName: string]: number | string | Date
}

export default function Contact(props: IProps): JSX.Element {
	const classes = useStyles(props);

    function onSubmitForm(values: ViewModel, formikHelpers: FormikHelpers<ViewModel>) {
        return new Promise((resolve, reject) => {
            
            MailSender.send(Global.EMAIL_SENDER, `contact-${Global.EMAIL_SENDER}`, values, Global.EMAILJS_KEY)
				.then((r) => {
					resolve(r);
				})
				.catch((e: Error) => {
					reject(e);
				});
        })

	}

	return (
		<Box className={classes.root} id='Contacto'>
			<Section>
				<Container fixed>
					<SecondTitle text='Contacto' color='dark' align='center' subtitle='DEJANOS TU CONSULTA' />
					<Grid container>
						<Grid item xs={12} md={6}>
							<List aria-label='servicios'>
								<ListItem>
									<ListItemIcon>
										<RoomIcon></RoomIcon>
									</ListItemIcon>
									<ListItemText
										disableTypography
										primary={<InfoTitle color='dark' text='Dirección' />}
										secondary={<PrimaryText color='dark' text={Global.BUSINESS_ADDRESS} />}
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<WhatsapIcon></WhatsapIcon>
									</ListItemIcon>
									<ListItemText
										disableTypography
										primary={<InfoTitle color='dark' text='Teléfono' />}
										secondary={<PrimaryText color='dark' text={Global.BUSINESS_PHONE} />}
									/>
								</ListItem>
								<ListItem>
									<ListItemIcon>
										<SheduleIcon></SheduleIcon>
									</ListItemIcon>
									<ListItemText
										disableTypography
										primary={<InfoTitle color='dark' text='Horario' />}
										secondary={<PrimaryText color='dark' text={Global.BUSINESS_TIME} />}
									/>
								</ListItem>
							</List>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormFactory
								initialValues={{
									[Labels.Nombre]: '',
									[Labels.Email]: '',
									[Labels.Mensaje]: ''
								}}
								validations={{
									[Labels.Nombre]: Yup.string().required(Messages.Requerido),
									[Labels.Email]: Yup.string().email(Messages.EmailInvalido).required(Messages.Requerido),
									[Labels.Mensaje]: Yup.string().max(400, 'Hasta 400').required(Messages.Requerido)
								}}
								onSubmit={onSubmitForm}>
								{(form) => (
									<>
										<TextInput name={Labels.Nombre} label={Labels.Nombre} disabled={form.status}></TextInput>
										<EmailInput name={Labels.Email} label={Labels.Email} disabled={form.status}></EmailInput>
										<TextAreaInput name={Labels.Mensaje} label={Labels.Mensaje} disabled={form.status}></TextAreaInput>
										<br />
										{form.isSubmitting && <LinearProgress />}
										<br />
										{!form.status ? (
											<PrimaryButton text='Enviar' disabled={form.isSubmitting || !form.isValid} onClick={form.submitForm} typeSubmit/>
										) : (
											<Typography variant='body1' component='p' gutterBottom color='primary'>
												<DoneIcon className={classes.doneIcon} /> Enviado
											</Typography>
										)}
									</>
								)}
							</FormFactory>
						</Grid>
					</Grid>
				</Container>
			</Section>
		</Box>
	);
}
