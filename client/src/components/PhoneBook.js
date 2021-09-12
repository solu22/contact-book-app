import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  CssBaseline,
  TextField,
  Button,
} from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

/*custom Styles */
import {
  paperStyle,
  buttonStyle,
  errorMessageStyle,
} from "../styles/allStyles";

import Lists from "./Lists";
import { useSelector, useDispatch } from "react-redux";
import { addContact, updateContact, fetchContact } from "../Redux/actions";

import Search from "./Search";

const PhoneBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.userReducer);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUser = users?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const onSubmit = ({ name, number }) => {
    // eslint-disable-next-line no-lone-blocks
    const existingUser =
      users &&
      users.find(
        (u) =>
          u.name.toLowerCase() === name.toLowerCase() ||
          u.number.toLowerCase() === number.toLowerCase()
      );

    if (existingUser) {
      if (
        existingUser?.number === number &&
        existingUser?.name.toLowerCase() === name.toLowerCase()
      ) {
        window.alert(`${name} : ${number} is already added to phonebook`);
        return;
      }

      if (existingUser?.name.toLowerCase() === name.toLowerCase()) {
        if (
          window.confirm(
            `${name} is already added to phonebook, replace old number with new one ? `
          )
        ) {
          const updatedPerson = { ...existingUser, number };
          dispatch(updateContact(updatedPerson));
          reset();
        }
        return;
      }

      if (existingUser?.number === number) {
        if (
          window.confirm(
            `phone number ${number} is already added to phonebook, replace old name with new one ? `
          )
        ) {
          const updatedPerson = { ...existingUser, name };
          dispatch(updateContact(updatedPerson));
          reset();
        }
        return;
      }
    } else {
      dispatch(addContact(name, number));
    }
    // eslint-disable-next-line no-undef
    reset();
  };

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" fixed>
        <Grid container spacing={2} justifyContent="center">
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={{ backgroundColor: "black" }}>
                <ContactPhoneIcon style={{ color: "white" }} />
              </Avatar>
              <h2>Welcome To PhoneBook App</h2>
              <Search value={search} onChange={handleSearchChange} />
            </Grid>

            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                fullWidth
                label="Name"
                placeholder="Enter your Name"
                name="name"
                {...register("name", { required: true })}
              />
              {errors.name && <p>Name is required</p>}
              <TextField
                fullWidth
                label="Number"
                placeholder="Enter your Number"
                name="number"
                style={{ padding: "5px" }}
                {...register("number", {
                  required: true,
                  minLength: { value: 10, message: "Required length is 10" },
                })}
              />
              {errors.number && (
                <p style={errorMessageStyle}>{errors.number.message}</p>
              )}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button type="submit" style={buttonStyle}>
                  Add /Update Entries
                </Button>
              </div>
            </form>

            {loading && <p style={{ textAlign: "center" }}>Loading Data</p>}
            <Lists users={filteredUser} />
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default PhoneBook;
