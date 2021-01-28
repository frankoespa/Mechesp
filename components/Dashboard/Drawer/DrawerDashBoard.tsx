import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from 'next/link';
import { UseCasesPermissions } from './UseCasesPermissions';
import React, { useContext, useState } from 'react';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useAuth } from '../../../src/contexts/AuthContext';

const useStyles = makeStyles((theme: Theme) => ({
	toolbar: theme.mixins.toolbar,
	nested: {
		paddingLeft: theme.spacing(4)
    },
    itemText: {
        color: theme.palette.text.secondary
    },
    iconText: {
        color: theme.palette.text.secondary
    }
}));

interface IProps {}

export function DrawerDashBoard(props: IProps) {
	const classes = useStyles(props);
	const { user } = useAuth()

	const listItemsMenu = Object.keys(UseCasesPermissions).filter(i => UseCasesPermissions[i].subItems.length !== 0);

	let stateMenuCollapse = {};

	listItemsMenu.forEach((p) => {
		stateMenuCollapse[p] = true;
	});

	const [menuCollapse, setMenuCollapse] = useState(stateMenuCollapse);

	const handleCollapseClick = (namePropMenu: string) => {
		setMenuCollapse({ [namePropMenu]: !menuCollapse[namePropMenu] });
    };
    
	const list = listItemsMenu.map((p, key) => {
		const value = UseCasesPermissions[p];

		if (value.subItems.length) {
			const subItems = value.subItems.map((s, i) => {
				if (s.permissions.some((p) => p === user.role)) {
					return (
						<Link href={s.url} key={i}>
							<ListItem button className={classes.nested} key={i}>
								<ListItemText primary={s.name} classes={{root: classes.itemText}}/>
							</ListItem>
						</Link>
					);
				}
			});

			return (
				<>
					<ListItem button onClick={() => handleCollapseClick(p)} key={key}>
						<ListItemIcon>{value.icon}</ListItemIcon>
						<ListItemText primary={p} classes={{root: classes.itemText}}/>
						{menuCollapse[p] ? <ExpandLess className={classes.iconText}/> : <ExpandMore className={classes.iconText}/>}
					</ListItem>
					<Collapse in={menuCollapse[p]} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							{subItems}
						</List>
					</Collapse>
				</>
			);
		}
	});

	return (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>{list}</List>
		</div>
	);
}
