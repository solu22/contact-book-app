/* eslint-disable no-undef */
import {
  List,
  ListItem,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";

import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { removeContact, fetchContact, updateContact } from "../Redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const Lists = ({ users }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);





  return (
    <List className={classes.root}>
      {users &&
        users.map((user) => (
          <ListItem key={user._id}>
            <p>{user.name}</p>
            <p>{user.number}</p>
            <ListItemSecondaryAction>
              <Button onClick ={()=> editItem(user._id)}>Edit</Button>
              <Button
                color="primary"
                variant="contained"
                onClick={() => dispatch(removeContact(user._id))}
              >
                Remove
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

export default Lists;
