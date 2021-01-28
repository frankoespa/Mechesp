import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

// Create a theme instance.
let themeDashboard = createMuiTheme({
	palette: {
		primary: {
			light: grey[50],
			main: '#15151a'
		},
		secondary: {
			main: '#536dfe'
		},
		error: {
			main: red.A400
		},
		text: {
			primary: grey[50],
			secondary: '#1E1E24'
		}
	}
});

themeDashboard.typography.h1 = {
	[themeDashboard.breakpoints.only('xs')]: {
		fontSize: '3rem'
	},
	[themeDashboard.breakpoints.only('sm')]: {
		fontSize: '4rem'
	},
	fontSize: '6rem',
	fontWeight: 700
};

themeDashboard.typography.h2 = {
	[themeDashboard.breakpoints.only('xs')]: {
		fontSize: '2rem'
	},
	fontSize: '3rem',
	fontWeight: 700
};

themeDashboard.typography.body1 = {
	[themeDashboard.breakpoints.only('xs')]: {
		fontSize: '1rem'
	},
	fontSize: '1.1rem',
	fontWeight: 300
};

export default themeDashboard;
