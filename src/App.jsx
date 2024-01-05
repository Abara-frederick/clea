import React from "react";
import Image from "./components/backgroundImage";
import { Card, Container, Grid } from "@mui/material";
import AddressInfo from "./components/adressInfo";
import About from "./components/About";
import FourLadies from "./components/fourLadis";
import { DisplaySettings } from "@mui/icons-material";
import BookUsBtn from "./components/bookUsBtn";




function App() {  
  return(
    <>
      <Image />            
      <Grid container>
        <Container>
          <Grid item>
            <AddressInfo />
          </Grid>
        </Container>
      </Grid>

      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={6}>
            <Card elevation={null}>
              <FourLadies />
            </Card>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Card elevation={null}>
              <About />
            </Card>
          </Grid>
        </Grid>
        <BookUsBtn/>
      </Container> 
     
      
    </>


  );

}

export default App