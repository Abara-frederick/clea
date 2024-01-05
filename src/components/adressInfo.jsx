import React from "react";
import { Typography } from "@mui/material";
const AddressInfo = () => {

    const word = `FIVE-STAR RATED MAIDS, VOTED AS THE BEST HOUSE CLEANING SERVICE IN LAS VEGAS BY THE REVIEW JOURNAL AND SBA 2019 NEVADA’S SMALL BUSINESS OF THE YEAR!
    TO SEE OUR AVAILABILITY OR SCHEDULE AN APPOINTMENT, PLEASE GO TO OUR 'BOOK NOW' PAGE`
    return ( 
        <div className="AddressInfo">
            <Typography fontSize={20}><br/>
                {word}<br/>
            </Typography>
        </div>


     );
}
 
export default AddressInfo;