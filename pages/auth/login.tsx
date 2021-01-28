import { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Box, Container, Grid, Tabs, Tab } from '@material-ui/core';
import { Labels } from '../../src/global/Labels';
import { useFirebaseAuthUtils } from '../../src/hooks/useFirebaseAuthUtils';
import { SignUp } from '../../components/Auth/SignUp';
import { SignIn } from '../../components/Auth/SignIn';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		height: '100vh',
		backgroundColor: theme.palette.primary.light
	},
	portadaLogin: {
		width: '100%'
	},
	paddings: {
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5)
	},
	rootColumnImg: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5)
	},
	rootColumnInputs: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: theme.spacing(5),
		paddingRight: theme.spacing(5)
	},
	container: {
		display: 'flex'
	},
	rootTabs: {
		marginBottom: theme.spacing(3)
	}
}));

interface IProps {}

enum StateLogin {
	Signin = 1,
	Signup = 2
}

function Login(props: IProps) {
	const classes = useStyles(props);

	const [stateLogin, setStateLogin] = useState(StateLogin.Signin);

	const handleStateLoginChange = (event: React.ChangeEvent<{}>, newStateLogin: StateLogin) => {
		setStateLogin(newStateLogin);
	};

	return (
		<Box className={classes.root}>
			<Container maxWidth='md' className={classes.container}>
				<Grid container>
					<Grid item xs={12} md className={classes.rootColumnImg}>
						<img src='/portada_login.svg' alt='portada login' className={classes.portadaLogin} />
					</Grid>
					<Grid item xs={12} md className={classes.rootColumnInputs}>
						<Tabs
							value={stateLogin}
							onChange={handleStateLoginChange}
							variant='fullWidth'
							indicatorColor='secondary'
							textColor='secondary'
							aria-label='tabs login'
							className={classes.rootTabs}>
							<Tab label={Labels.CrearCuenta} value={StateLogin.Signup} />
							<Tab label={Labels.Ingresar} value={StateLogin.Signin} />
						</Tabs>
						{stateLogin == StateLogin.Signin ? <SignIn /> : <SignUp />}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Login;
