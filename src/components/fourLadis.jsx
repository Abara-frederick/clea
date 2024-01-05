import React from "react";
import { Typography } from "@mui/material";
import { Margin } from "@mui/icons-material";
import { red } from "@mui/material/colors";
const FourLadies = () => {
    return (
        <>
            <br/>
            <img src="../resources/fourLadies.jpg" alt="image of four chaerful ladies" />
            <Typography variant="h6" align="center"><br/>
                WHAT HAPPENS WHEN YOU BOOK
            </Typography>
            <Typography fontSize={20}><br/>
                When you book your Superb service, here’s what happens… Watch our Youtube Channel for answers to frequently asked questions.
            </Typography><br/><br/>

            <a href="https://youtu.be/2yAEir7gCnA"><img src="../resources/youtubeLinkImage.jpg" alt="youtube"/></a>
            
            
            <Typography fontSize={20} ><br/>
            Our cleaning expertise has been featured nationally on Today.com, Forbes, MarthaStewart.com, Reader’s Digest, Newsweek, and Yahoo News. As well as in the local media: ABC 13 KTNV, Chanel 3, Chanel 8 KLAS, VEGAS, INC and Nevada Business Magazine. 
            <br/>
            <br/>
            We are named amongst the top 25 home cleaners in the United States.
            </Typography><br/><br/>

        </>
       
      );
}
 
export default FourLadies;