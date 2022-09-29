// import { Box } from '@mui/system'
import React from "react";
// import Typography from 'src/theme/overrides/Typography'
import { Box, Container, Grid, Stack, Typography, Card, CardMedia, CardContent } from "@mui/material";
import FrontendTrack from '../../../assets/images/FrontendTrack.svg';
import BackendTrack from '../../../assets/images/BackendTrack.svg';
import CloudPractioner from '../../../assets/images/CloudPractioner.svg';
import FullStackTrack from '../../../assets/images/FullStackTrack.svg';
import Essentials from '../../../assets/images/Essentials.svg';
import DatabaseExpert from '../../../assets/images/DatabaseExpert.svg';
const list = [
  {
    img: FrontendTrack,
    Title: "Frontend",
    Subtitle:"Stack: HTML, CSS, JS, React, Redux, MUI Microfrontend & much more"
  },
  {
    img: BackendTrack  ,
    Title:"Backend",
    Subtitle: "Stack: Nodejs, Express, MongoDB, GraphQL, PgSQL, Websocket, Microservices etc.",
  },
  
  {
    img: FullStackTrack  ,
    Title:"Full Stack",
    Subtitle: "Stack: Everything in Frontend + Backend",
  },
  {
    img: CloudPractioner ,
    Title:"Cloud Practioner",
    Subtitle: "Stack: AWS EC2, S3, CI/CD Pipeline & 16 other cloud services + GCP & Azure",
  },
  {
    img: DatabaseExpert  ,
    Title:"Database Expert",
    Subtitle: "Stack: MongoDB, Postgres & Redis",
  },
  {
    img: Essentials  ,
    Title:"Essentials",
    Subtitle: "Stack: Git, Redux, Typescript Docker, Kubernetes & Postman",
  },
  
];

function Track() {
  return (
    <>
      <Box p={2.5}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#E8E5FB",
            borderRadius: "20px",
          }}
          py={3}
        >
          <Container>
          
          <Typography variant="h3" sx={{ color: "#5544C0" }} align="center" pb={5}>
            Choose a track & Get Started
          </Typography>
          <Grid container spacing={3} >
            {
              list.map((el)=>{
               return  <Grid item xs={12} md={4}>
                
                  <Card
                    // py={4}
                    sx={{heigth:"100%"}}
                  >
                        <CardMedia
                        alt="GeeksforGeeks"
                        component="img"
                        title="GeeksforGeeks"
                        height={260}
                        image={el.img}
                        // sx={{backgroundColor:"72C15E"}}
                         />
                        <CardContent >
                        <Stack py={4} >
                         <Typography variant="h3" color="#000000" pb={1}>
                        { el.Title}
                         </Typography>
                         <Typography variant="body2" color="#505050">
                        {el.Subtitle}
                         </Typography>
                         </Stack>
                        </CardContent>
                        
                        
                          
                  </Card>
              
              </Grid>
              })

            }
               
            
          </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Track;
