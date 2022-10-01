import React from "react";
// import Box from '@mui/material/Box';
import { Container, Box, Grid, Stack, Typography, Button } from "@mui/material";
// import Button from 'src/theme/overrides/Button';
import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded';
import HeroImg from '../../../assets/images/Hero.svg';
function Hero() {
  return (
    <Box p={2.5}>
      <Box
        sx={{
          width: "100%",
        
          backgroundColor: "#8878EC30",
          borderRadius: "20px",
          
        }}
        p={5}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack  p={4} justifyContent='center' alignItems='center' sx={{width:'100%'}}>
              <Stack spacing={5} >
              <Typography variant="h2" sx={{color:'#5544C0'}} >
               
               Be the <span style={{color:'#000000'}}>Developer</span> <br />
                that you always <br />
                Wanted to be
                
              </Typography>
              <Typography variant="subtitle2" >
                Get access to full stack developer courses, study material &<br/>
                Live Projects at Just Rs. 500 / month
              </Typography>

              <Button variant="contained" fullWidth={false} sx={{width:'max-content',backgroundColor:'#5544C0'}} size='large' endIcon={<TrendingFlatRoundedIcon/>}
              >Explore courses</Button>
              </Stack>
              
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack >
             <img src={HeroImg}/>
            </Stack>

          </Grid>
        </Grid>
      </Box>
    </Box>
    // </Container>
  );
}

export default Hero;
