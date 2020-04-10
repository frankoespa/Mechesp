import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import SweetScroll from 'sweet-scroll';

const drawerWidth = 240;

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			[theme.breakpoints.up('sm')]: {
				width: drawerWidth,
				flexShrink: 0,
				position: 'absolute'
			}
		},
		logo: {
			width: 80,
			paddingTop: theme.spacing(1),
			paddingBottom: theme.spacing(1)
		},
		appBar: {
			boxShadow: 'none'
		},
		appBarContent: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center'
		},
		appBarBtn: {
			color: theme.palette.text.primary
		},
		menuButton: {
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			}
		},
		toolbar: theme.mixins.toolbar,
		drawerPaper: {
			width: drawerWidth
		},
		content: {
			flexGrow: 1,
			width: '100%'
		},
		menuLink: {
			color: theme.palette.primary.main
		}
	});

interface Props extends WithStyles<typeof styles> {}

interface IState {
	mobileOpen: boolean;
}

class BaseLayout extends Component<Props, IState> {
	sweetScroll: SweetScroll;

	constructor(props) {
		super(props);
		this.sweetScroll = new SweetScroll({});
		this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
		this.handleSweetScroll = this.handleSweetScroll.bind(this);
		this.state = {
			mobileOpen: false
		};
	}

	handleDrawerToggle() {
		this.setState({
			mobileOpen: !this.state.mobileOpen
		});
	}

	handleSweetScroll(section: string): void {
		switch (section) {
			case 'Nosotros':
				this.sweetScroll.to(`#${section}`);
				!this.state.mobileOpen ? null : this.handleDrawerToggle();
				break;
			case 'Servicios':
				this.sweetScroll.to(`#${section}`);
				!this.state.mobileOpen ? null : this.handleDrawerToggle();
				break;

			default:
				break;
		}
	}

	render() {
		const { children, classes } = this.props;
		const drawer = (
			<div>
				<div className={classes.toolbar} />
				<Divider />
				<List>
					{['Servicios', 'Nosotros', 'Contacto'].map((text, index) => (
						<ListItem button onClick={() => this.handleSweetScroll(text)} key={index}>
							<ListItemText primary={text} className={classes.menuLink} />
						</ListItem>
					))}
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<AppBar position='absolute' className={classes.appBar}>
					<Toolbar>
						<Container className={classes.appBarContent}>
							<img src='/logoMecánicaEsparza.svg' alt='Mecánica Esparza' className={classes.logo} />
							<Box>
								<Hidden xsDown>
									<Button className={classes.appBarBtn} onClick={() => this.handleSweetScroll('Nosotros')}>
										Nosotros
									</Button>
									<Button className={classes.appBarBtn} onClick={() => this.handleSweetScroll('Servicios')}>
										Servicios
									</Button>
									<Button className={classes.appBarBtn}>Contacto</Button>
								</Hidden>
								<IconButton
									color='inherit'
									aria-label='open drawer'
									edge='end'
									onClick={this.handleDrawerToggle}
									className={classes.menuButton}>
									<MenuIcon />
								</IconButton>
							</Box>
						</Container>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label='mailbox folders'>
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation='css'>
						<Drawer
							variant='temporary'
							anchor='left'
							open={this.state.mobileOpen}
							onClose={this.handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper
							}}
							ModalProps={{
								keepMounted: true // Better open performance on mobile.
							}}>
							{drawer}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					{children}
				</main>
				<style jsx global>{`
					html,
					body,
					#__next {
						width: 100%;
						height: auto;
					}
				`}</style>
			</div>
		);
	}
}

export default withStyles(styles)(BaseLayout);
