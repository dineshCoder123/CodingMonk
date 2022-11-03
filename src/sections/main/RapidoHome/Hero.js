import React from "react";
import {
    Grid, Typography, Stack, Container, Button, Box, TextField, InputAdornment, Divider, Card,
    CardMedia,
    CardContent
} from "@mui/material";
import taxiDriver from "../../../assets/images/taxiDriver.png";
import carRide2 from "../../../assets/images/carRide2.png";
import carRide3 from "../../../assets/images/carRide3.png";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
const list = [
    {
        img: taxiDriver,
        Title: "Daily Rides",
        Subtitle: "The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as AED 2/km, you can choose from a wide range of options!"
    },
    {
        img: carRide2,
        Title: "Daily Rides",
        Subtitle: "The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as AED 2/km, you can choose from a wide range of options!"
    },

    {
        img: carRide3,
        Title: "Daily Rides",
        Subtitle: "The perfect way to get through your everyday travel needs. City taxis are available 24/7 and you can book and travel in an instant. With rides starting from as low as AED 2/km, you can choose from a wide range of options!"
    }
];
function Hero() {
    return (
        <>
            <Container>
                <Box mt={9}>
                    <Typography variant="h3" >
                        A Ride For Every Need
                    </Typography>
                    <Typography variant="body2">
                        Rapido offers various plans to meet your demands be it daily commute or a day out with friends & family
                    </Typography>
                </Box>
                <Box pt={5}  >

                <Grid container spacing={3}  >
                    {list.map((el, idx) => {
                        return (
                            <Grid item xs={12} md={4} key={idx} position="relative">
                                <Card sx={{ heigth: "100%" }}>
                                    <CardMedia
                                        alt="GeeksforGeeks"
                                        component="img"
                                        title="GeeksforGeeks"
                                        height={260}
                                        image={el.img}
                                    // sx={{backgroundColor:"72C15E"}}
                                    />
                                    <CardContent>
                                        <Stack py={4}>
                                            <Typography variant="h3" color="#000000" pb={1}>
                                                {el.Title}
                                            </Typography>
                                            <Typography variant="body2" color="#505050">
                                                {el.Subtitle}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                                <Box sx={{borderRadius:"50%",position:"absolute",backgroundColor:"#294EB1",top:"0%" ,left:"50%",p:"20px"}}>
                              <DirectionsCarIcon style={{fill:"white"}}></DirectionsCarIcon>
                              </Box>
                            </Grid>
                             
                        );
                    })}
                </Grid>
                </Box>
                <Box>

             <Typography variant="h3">
                Why Ride Rapido?
             </Typography>
             <Typography variant="body1">
             Best way to reach your destination
             </Typography>
                </Box>
            
           

            </Container>
        </>
    )
}
export default Hero;

