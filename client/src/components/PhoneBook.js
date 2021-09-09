import axios from 'axios'
import React, { useState, useEffect } from "react";
import { Container,Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import Lists from "./Lists";

const PhoneBook = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [userList, setUserList] = useState([])

  const url = '/api/v1/users'

  const paperStyle = {
    padding: "30px 20px",
    backgroundColor: "#00A19D",
    color: "white",
    width: 370,
    margin: "20px auto"
  };

  const buttonStyle = {
    variant: "contained",
    color: "black",
    textAlign: "center",
    backgroundColor:"white",
    marginTop: "15px"
  }

const fetchData = async ()=>{ 

 const response= await axios.get(url)
 setUserList(response.data)
}

 useEffect(() => {
  fetchData()
  },[])
 
  console.log(userList)

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
        <form>
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
        </form>
        <div style= {{display:"flex", justifyContent:"center"}}>
        <Button type = "submit" style = {buttonStyle}>Add Entries</Button>
        </div>
         {userList && userList?.map(user=>(
           <Lists user = {user} />
         ))}
       </Paper>
      
    </Container>
  );
};

export default PhoneBook;
