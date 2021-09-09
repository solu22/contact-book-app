/* eslint-disable no-undef */
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
}));

const Lists = ({ user}) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem key = {user.name}>
        <p>{user.name}</p>
        <p>{user.number}</p>
        <ListItemSecondaryAction>
          <Button>Edit</Button>
          <Button color="primary" variant="contained">
            Remove
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default Lists;
