import { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useRouter } from 'next/router';
import { DrawerDashBoard } from '../Dashboard/Drawer/DrawerDashBoard';
import { getTitle } from '../Dashboard/Drawer/UseCasesPermissions';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex'
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0
		}
	},
	appBar: {
		marginLeft: drawerWidth,
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`
        },
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.secondary
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none'
		}
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.main
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

interface IProps {
	children: JSX.Element | JSX.Element[];
}

export function DashboardLayout(props: IProps) {
	const classes = useStyles(props);
	const { children } = props;
	const { pathname, events } = useRouter();
	const [mobileOpen, setMobileOpen] = useState(false);
	const [title, setTitle] = useState(pathname);

	useEffect(() => {
		console.log('Dashboard layout rendered');
		setTitle(getTitle(pathname));

		const handleRouteChange = (url) => {
			setTitle(getTitle(url));
		};

		events.on('routeChangeComplete', handleRouteChange);

		return () => {
			events.off('routeChangeComplete', handleRouteChange);
		};
	}, []);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<div className={classes.root}>
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton color='inherit' aria-label='open drawer' edge='start' onClick={handleDrawerToggle} className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap>
						{title}
					</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label='mailbox folders'>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation='css'>
					<Drawer
						variant='temporary'
						anchor='left'
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper
						}}
						ModalProps={{
							keepMounted: true // Better open performance on mobile.
						}}>
						<DrawerDashBoard />
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation='css'>
					<Drawer
						classes={{
							paper: classes.drawerPaper
						}}
						variant='permanent'
						open>
						<DrawerDashBoard />
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Container>{children}</Container>
			</main>
			<style jsx global>{`
				html,
				body,
				#__next {
					height: 100%;
				}
			`}</style>
		</div>
	);
}
