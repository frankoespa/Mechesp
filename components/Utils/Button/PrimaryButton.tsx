import { Button, makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
	boxBtn: {
		// background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)'
		// color: theme.palette.text.primary
		// '&$disableBtn': {
		// 	background: 'none',
		// 	backgroundColor: grey[200]
		// }
	},
	disableBtn: {
	}
}));

interface IProps {
	text: string;
	href?: string;
    disabled?: boolean;
    typeSubmit?: boolean;
    size?: 'small' | 'medium' | 'large'
	onClick?: () => void;
}

export default function PrimaryButton(props: IProps) {
	const classes = useStyles(props);
	const { text, href, disabled, onClick, typeSubmit, size } = props;

	return (
        <Button
            color= 'secondary'
            variant='contained'
            type= {typeSubmit ? 'submit' : 'button'}
			size= {size ? size : 'large'}
			href={href}
			onClick={onClick}
			disabled={disabled}
			classes={{
                root: classes.boxBtn,
                disabled: classes.disableBtn
			}}>
			{text}
		</Button>
	);
}
