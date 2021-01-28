import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Grid, Typography, Link } from '@material-ui/core';
import Section from '../Utils/Sections/Section';
import IconWhatsap from '@material-ui/icons/WhatsApp';
import IconFacebook from '@material-ui/icons/Facebook';
import { Global } from '../../src/global/Global';
import PrimaryText from '../Utils/Text/PrimaryText';

interface IProps {}

const useStyles = makeStyles((theme: Theme) => ({
	icon: {
		verticalAlign: 'bottom',
		marginRight: theme.spacing(1)
	},
	logo: {
		width: '200px'
	},
	sectionInfo: {
		textAlign: 'center'
	},
	sectionCopyRight: {
		textAlign: 'center',
		paddingTop: theme.spacing(1.2),
		paddingBottom: theme.spacing(1.2)
	},
	sectionAutor: {
		backgroundColor: theme.palette.secondary.main
	}
}));

export default function Footer(props: IProps) {
	const classes = useStyles(props);

	return (
		<Box>
			<Section background='dark'>
				<Container>
					<Grid container spacing={4} className={classes.sectionInfo}>
						<Grid item xs={12} md={4}>
							<img src='/fullLogo.svg' alt='Logo Mecánica Esparza' className={classes.logo} />
							<PrimaryText color='light' text={Global.BUSINESS_ADDRESS} />
							<Typography variant='body1' component='p' gutterBottom>
								<Link href={Global.WHATSAPP_PHONE} color='inherit' underline='none'>
									<IconWhatsap className={classes.icon}></IconWhatsap> {Global.BUSINESS_PHONE}
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={12} md={4} className={classes.sectionInfo}>
							<PrimaryText color='light' text={Global.BUSINESS_TIME} />
							<PrimaryText color='light' text={Global.BUSINESS_LOCATION} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.sectionInfo}>
							<Typography variant='body1' component='p' gutterBottom>
								<Link href={Global.FACEBOOK_PAGE} color='inherit' underline='none'>
									<IconFacebook className={classes.icon}></IconFacebook> Seguinos
								</Link>
							</Typography>
						</Grid>
					</Grid>
				</Container>
			</Section>
			<Box className={classes.sectionCopyRight}>
				<Typography variant='body2' component='p'>
					© {new Date().getFullYear()} Copyright Mecánica Esparza
				</Typography>
			</Box>
			<Box className={`${classes.sectionCopyRight} ${classes.sectionAutor}`}>
				<Typography variant='body2' component='p'>
					Developed by{' '}
					<Link href={Global.LINKEDIN_AUTOR} color='inherit' underline='none'>
						Franco Esparza
					</Link>
				</Typography>
			</Box>
		</Box>
	);
}
