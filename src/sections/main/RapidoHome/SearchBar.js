import React from "react";
import { Grid, Typography, Stack, Container, Button, Box } from "@mui/material";
import carRide from '../../../assets/images/carRide.jpg';
function SearchBar()
{
  return  (
  <>
     <Box  sx={{ backgroundImage:`url(${carRide})`, backgroundSize:"cover", height:"700px"}}  py={5}  >
        <Stack height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"} spacing={5}>

    <Stack direction="row" alignItems="center" justifyContent={"center"}>   
    <Typography variant="h2" color="#FFFFFF">

     It’s time to change the
     ride experience
    </Typography>
   
    </Stack>
       <Stack alignItems="center" justifyContent="center">
       <Box height="150px" width="80vw" sx={{borderRadius:"50px", backgroundColor:"white"}}>
         
       </Box>

        </Stack>
        </Stack>
    </Box>
  </>
  )
}
export default SearchBar;



