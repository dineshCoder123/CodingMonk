import { Box,Container,Grid,Stack,Typography } from "@mui/material";
import React from "react";

import QuestionMark from "../../../assets/images/Question.svg";
function Doubt() {
  return(

    <>
    <Box p={2.5}>
      <Box sx={{
           width: "100%",
           background: "radial-gradient(100% 488.09% at 0% 0%, rgba(241, 211, 166, 0.78) 0%, rgba(241, 211, 166, 0) 100%) ",
        // backgroundColor:"red",
           borderRadius: "20px",

      }}>
   <Container>

     <Grid container spacing={2} >
       
       <Grid item xs={12} md={6}>
        <Stack height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"}>
          
        <Stack   >
      <Typography variant="h3" color="#5544C0" py={1}>
      Doubt support available <br></br>
      in all tracks
      </Typography>
       <Typography variant="body1" color="#000000">
        Our support assistants are always there to 
        unstuck your progress
        </Typography>
        </Stack>
        </Stack>
       </Grid>
       <Grid item xs={12} md={6}>
        <Stack alignItems={"center"} justifyContent={"center"}>
        <img src={QuestionMark}/> 
        </Stack>
         
       </Grid>
     </Grid>
   </Container>

      </Box>

    </Box>
 
  
    </>
  )
}

export default Doubt;
