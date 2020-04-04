import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
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
		background: {
			default: '#1E1E24'
		},
		text: {
			primary: grey[50],
			secondary: '#1E1E24'
		}
	},
	typography: {
		body1: {
			fontSize: '1.1rem',
			fontWeight: 300
		}
	}
});

theme.typography.h1 = {
	[theme.breakpoints.only('xs')]: {
		fontSize: '3rem'
	},
	[theme.breakpoints.only('sm')]: {
		fontSize: '4rem'
	},
	fontSize: '6rem',
	fontWeight: 700
};

theme.typography.h2 = {
	[theme.breakpoints.only('xs')]: {
		fontSize: '2rem'
	},
	fontSize: '3rem',
	fontWeight: 700
};

theme.typography.body1 = {
	[theme.breakpoints.only('xs')]: {
		fontSize: '1rem'
	},
	fontSize: '1.1rem',
	fontWeight: 300
};

export default theme;
