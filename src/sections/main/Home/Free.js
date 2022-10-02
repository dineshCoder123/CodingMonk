import { Container, Grid, Typography, Button, Stack,Box } from "@mui/material";
// import { Box } from "@mui/system";
// import { Stack } from 'immutable'
import React from "react";
// import Button from 'src/theme/overrides/Button'
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
// import Typography from 'src/theme/overrides/Typography'

function Free() {
  return (
    <>
      <Box p={2.5}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#373351",
            borderRadius: "20px",
            // height:"426px"
            py:{xs:6,md:12}
          }}
        
          
        >

          <Container >
              {/* <Stack height="100%" width="100%" justifyContent={"center"} alignItems="center" > */}

            
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} height="100%">
              <Stack height={"100%"} width={"100%"} alignItems="start" justifyContent={"center"}  >
              <Typography variant="h3"  color="#FFFFFF">
                Still on fence, Thinking <br />
                hard ?
              </Typography>
              </Stack>
              
            </Grid>
            <Grid item xs={12} md={6} height="100%">
              <Stack height={"100%"} width={"100%"} justifyContent="center" alignItems={"center"}>
                <Stack spacing={2}>
                  <Button
                    variant="contained"
                    sx={{ width: "max-content", backgroundColor: "#5544C0" }}
                    size="large"
                    endIcon={<TrendingFlatRoundedIcon />}
                  >
                    Try 14 days for free
                  </Button>
                  <Typography variant="subtitle1" py={1} color="#FFFFFF">
                    {/* import TrendingFlatRoundedIcon from '@mui/icons-material/TrendingFlatRounded'; */}
                    No payment method required, Just signup <br />& start
                    learning today
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          {/* </Stack> */}
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Free;
