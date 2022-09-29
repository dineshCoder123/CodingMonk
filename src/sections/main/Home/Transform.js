import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Group3 from "../../../assets/images/group3.svg";
import Discount from "../../../assets/images/Discount.svg";


import React from "react";

const list = [
  {
    img: Group3,
    Title: "Choose from multiple tracks (Frontend, Backend, Cloud Practioner & fullstack)",
  },
  {
    img: circledPlay,
    Title: "Get access to all courses & study material for a monthly subscription as low as Rs. 350",
  },
  
  {
    img: Discount,
    Title: "Try 14 days for free",
  },
  
];

function Transform() {
  return (
    <Box p={2.5}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#5544C0",
          borderRadius: "20px",
        }}
        p={8}
      >
      <Container>
      <Typography variant="h4" sx={{ color: "#FFFFFF" }}>
          Transform Your Career & Be Industry Ready
        </Typography>
        <Typography variant="h10" sx={{ color: "#D3D3D3" }} pt={1}>
          Learn development from leading developers & become dev that inspires
        </Typography>

        <Grid container spacing={4} mt={6} alignItems="center">
          {
            list.map((el,idx)=>{

            return  <Grid item xs={12} md={4}>
            <Stack
              alignItems={"center"}
              justifyContent="start"
              spacing={2}
              px={6}
            >
              <Box
                sx={{
                  backgroundColor: "#77C0EA",
                  borderRadius: "20px",
                  width: "max-content",
                }}
                p={2}
              >
                <Stack style={{
                    height: "40px",
                    width:"40px"
                  }}>
                  
                <img
                  src={el.img}
                  
                />
                </Stack>
              </Box>
              <Typography
                variant="subtitle2"
                color="#E3E3E3"
                textAlign={"center"}
              >
               {el.Title}
              </Typography>
            </Stack>
          </Grid>
            })
          } 
        </Grid>
      </Container>
      </Box>
    </Box>
  );
}

export default Transform;
