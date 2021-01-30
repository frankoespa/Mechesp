import { makeStyles, Theme } from "@material-ui/core/styles";
import {Backdrop, CircularProgress} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper
      }
}));

interface IProps {}

export default function Loading(props: IProps) {

    const classes = useStyles(props);

    return (
        <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="primary"/>
      </Backdrop>
    )
}
