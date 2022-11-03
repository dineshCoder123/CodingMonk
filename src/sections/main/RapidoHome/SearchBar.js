import React from "react";
import { Grid, Typography, Stack, Container, Button, Box, TextField, InputAdornment, Divider ,Card} from "@mui/material";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import carRide from '../../../assets/images/carRide.jpg';
import PinDropIcon from '@mui/icons-material/PinDrop';
import SellIcon from '@mui/icons-material/Sell';
function SearchBar() {
   return (
      <>
         <Box sx={{ backgroundImage: `url(${carRide})`, backgroundSize: "cover", minHeight: "700px", position: "relative" }}  >
            <Stack height={"100%"} width={"100%"} alignItems="center" justifyContent={"center"} spacing={5} sx={{ top: "50%", left: "50%", position: "absolute", transform: "translate(-50% ,-50%)" }}>

               <Stack direction="row" alignItems="center" justifyContent={"center"}>
                  <Typography variant="h2" color="#FFFFFF" textAlign="center">

                     It’s time to change the<br />
                     ride experience
                  </Typography>

               </Stack>
               <Stack alignItems="center" justifyContent="center">
                  <Box sx={{ borderRadius: "50px", backgroundColor: "white" }}>
                     <Grid container py={1}>
                        <Grid item md={3} xs={12} >
                           <Stack direction="row" alignItems="center" justifyContent="center" height="100%" width="100%" px={3}>

                              <TextField fullWidth variant="standard" InputProps={{
                                 startAdornment: <InputAdornment sx={{ pr: 1 }} >
                                    <GpsFixedIcon />
                                 </InputAdornment>, disableUnderline: true
                              }} placeholder="Enter Source" />
                              <Divider orientation="vertical" />
                           </Stack>

                        </Grid>
                        <Grid item md={3} xs={12} >
                           <Stack direction="row" alignItems="center" justifyContent="center" height="100%" width="100%" px={3}>

                              <TextField fullWidth variant="standard" InputProps={{
                                 startAdornment: <InputAdornment sx={{ pr: 1 }} >
                                    <GpsFixedIcon />
                                 </InputAdornment>, disableUnderline: true
                              }} placeholder="Enter Destination" />
                              <Divider orientation="vertical" />
                           </Stack>

                        </Grid>
                        <Grid item md={3} xs={12} >
                           <Stack direction="row" alignItems="center" justifyContent="center" height="100%" width="100%" px={3}>

                              <TextField fullWidth variant="standard" InputProps={{
                                 startAdornment: <InputAdornment sx={{ pr: 1 }} >
                                    <GpsFixedIcon />
                                 </InputAdornment>, disableUnderline: true
                              }} placeholder="Date & Time" />
                              <Divider orientation="vertical" />
                           </Stack>

                        </Grid>
                        <Grid item md={3} xs={12} px={2}>

                           <Button variant="contained" fullWidth sx={{ backgroundColor: '#5544C0', borderRadius: 5 }} size='large'
                           >Search</Button>
                           {/* <Divider orientation="vertical"/> */}
                        </Grid>
                     </Grid>

                  </Box>

               </Stack>
            </Stack>
            <Box sx={{position:'absolute', bottom:-40,left:"50%", zIndex:20,transform:"translate(-50%)"}} >

    <Container >

         <Card >
         <Box p={2} width={"86vw"}>
            <Grid container spacing={2}>
               <Grid item xs={12} md={3}>
                  <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" height="100%" width="100%">
                     <SellIcon></SellIcon>
                     <Stack spacing={1} justifyContent="center" alignItems="start" pt={2}>
                        <Typography variant="body1" color="#1B2C52">
                           Flat 15% Off
                        </Typography>
                        <Typography variant="body1" color="##000000">
                           Every Months's first date
                        </Typography>
                     </Stack>
                     <Divider orientation="vertical" />
                  </Stack>
               </Grid>
               <Grid item xs={12} md={3}>
               <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" height="100%" width="100%">
                     <SellIcon></SellIcon>
                     <Stack spacing={1} justifyContent="center" alignItems="start" pt={2}>
                        <Typography variant="body1" color="#1B2C52">
                          Free Guide
                        </Typography>
                        <Typography variant="body1" color="##000000">
                          On every tour booking
                        </Typography>
                     </Stack>
                     <Divider orientation="vertical" />
                  </Stack>

               </Grid>
               <Grid item xs={12} md={3}>
               <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" height="100%" width="100%">
                     <SellIcon></SellIcon>
                     <Stack spacing={1} justifyContent="center" alignItems="start" pt={2}>
                        <Typography variant="body1" color="#1B2C52">
                           Flat 20% Off
                        </Typography>
                        <Typography variant="body1" color="##000000">
                           On each referral
                        </Typography>
                     </Stack>
                     <Divider orientation="vertical" />
                  </Stack>

               </Grid>
               <Grid item xs={12} md={3}>
               <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" height="100%" width="100%">
                     <SellIcon></SellIcon>
                     <Stack spacing={1} justifyContent="center" alignItems="start" pt={2}>
                        <Typography variant="body1" color="#1B2C52">
                          Safe & Reliable
                        </Typography>
                        <Typography variant="body1" color="##000000">
                           Every Ride
                        </Typography>
                     </Stack>
                  </Stack>

               </Grid>

            </Grid>



         </Box>

         </Card>
    </Container>
            </Box>
         </Box>
      </>
   )
}
export default SearchBar;



