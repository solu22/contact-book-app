import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Lists from "./Lists";
import { useSelector, useDispatch } from "react-redux";
import { addContact, updateContact } from "../Redux/actions";

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.userReducer);

  const paperStyle = {
    padding: "30px 20px",
    backgroundColor: "#00A19D",
    color: "white",
    width: 370,
    margin: "20px auto",
  };

  const buttonStyle = {
    variant: "contained",
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: "15px",
  };

 


  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = users?.find(u => u.name.toLowerCase()=== name.toLowerCase() || u.number.toLowerCase()===number.toLowerCase())

    if(existingUser){

      if(existingUser.number === number && existingUser.name.toLowerCase()=== name.toLowerCase()){
        window.alert(
         `${name} : ${number} is already added to phonebook`
       )
       return
       }

       if(existingUser.name.toLowerCase()=== name.toLowerCase()){
        if(window.confirm(`${name} is already added to phonebook, replace old number with new one ? ` ))
        {
         const updatedPerson = {...existingUser, number:number}
         dispatch(updateContact(updatedPerson))
         
         }
         return 
        }
      } else{
        dispatch(addContact(name, number));
      }
      

    }

  return (
    <Container>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "black" }}>
            <ContactPhoneIcon style={{ color: "white" }} />
          </Avatar>
          <h2>Welcome To PhoneBook App</h2>
          <input
            type="text"
            placeholder="enter name to search"
            style={{ padding: "10px", borderRadius: "10px", border: "none" }}
          />
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Number"
            placeholder="Enter your Number"
            onChange={(e) => setNumber(e.target.value)}
            style={{ padding: "5px" }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit" style={buttonStyle}>
              Add Entries
            </Button>
          </div>
        </form>

        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <Lists users={users} currentId = {currentId} setCurrentId= {setCurrentId}/>
      </Paper>
    </Container>
  );
};

export default PhoneBook;
