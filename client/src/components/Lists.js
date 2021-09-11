import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { Button} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { removeContact } from "../Redux/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px auto",
  },
  table: {
    minWidth: 350,
    backgroundColor: "black",
  },

  tableCell: {
    minWidth: 70,
    color: "white",
    marginTop: "50px",
  },
  tableCell1: {
    fontSize: "16px",
    color: "white",
  },

  Button: {
    width: "60px",
    height: "60px",
    color: "red",
    pointer: "cursor",
    padding: "10px",
  },
}));

const Lists = ({ users }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <TableContainer className={classes.container}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {users && users.length === 0 ? (
              <TableCell align="center" className={classes.tableCell}>
                No users in database
              </TableCell>
            ) : (
              <>
                <TableCell align="center" className={classes.tableCell}>
                  {" "}
                  Name{" "}
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  Number
                </TableCell>
                <TableCell align="center" className={classes.tableCell}>
                  Action
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user) => (
              <>
                <TableRow key={user._id}>
                  <TableCell align="center" className={classes.tableCell1}>
                    {user.name}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell1}>
                    {user.number}
                  </TableCell>
                  <TableCell align="center" className={classes.tableCell1}>
                    <Button
                      className={classes.Button}
                      onClick={() => dispatch(removeContact(user._id))}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              </>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Lists;
