import React from "react";
// import useStyles from "./styles"

import './styles.css'
import { Typography, colors } from "@mui/material";

const Image = () => {
    // const classes = useStyles();

    return ( 

        <>
            <div className="backgroundImageContainer">
                <div className="imageDiv">

                </div>
                
                <img src="../resources/main-image.jpg" alt="this is an image" />
                
                <Typography variant="h6" align="center">
                    Honest. Simple. Clean. 
                </Typography>
                <div className="centeredText">
                    <Typography variant="h2" align="center" >
                        YOU DESERVE <br /> A CLEAN HOME
                    </Typography>
                   
                </div>
             
              
            </div>
      
            
        </>
     );
}
 
export default Image;