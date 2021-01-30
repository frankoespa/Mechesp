import { Theme, createStyles, WithStyles, withStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
    
const useStyles = makeStyles((theme: Theme) => (
    {
		headingText: {
			fontWeight: theme.typography.fontWeightMedium,
            width: '100%',
            color: theme.palette.text.secondary
        },
		contentDialog: {
			display: 'block'
		},
		root: {
			marginBottom: theme.spacing(2)
		}
    }
));


interface IProps {
	children?: JSX.Element[] | JSX.Element;
	title: string;
}

export function PanelExpanded(props: IProps): JSX.Element {
    const classes = useStyles(props);
	const { children, title } = props;

	return (
		<ExpansionPanel defaultExpanded={true} className={classes.root}>
			<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel-content'>
				<Typography align='center' className={classes.headingText}>
					{title}
				</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails className={classes.contentDialog}>{children}</ExpansionPanelDetails>
		</ExpansionPanel>
	);
}
