import React from "react";
import { Grid, Typography, Stack, Container, Button } from "@mui/material";
// import Typography from 'src/theme/overrides/Typography'

function Nav() {
  return (
    <>
      <Grid
        container
        sx={{ backgroundColor: "#1B2C52" }}
        direction="row"
        py={3}
      >
        {/* <Container> */}
        <Grid item xs={12} md={6} spacing={2}>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"center"}
            spacing={4}
          >
            <Typography variant="h4" color="#FFFFFF">
              Rapido
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Button
                variant="text"
                sx={{ width: "max-content", color: "#FFFFFF" }}
                size="large"
              >
                Your cars
              </Button>
              <Button
                variant="text"
                sx={{ width: "max-content", color: "#FFFFFF" }}
                size="large"
              >
                Tour Packages
              </Button>
              <Button
                variant="text"
                sx={{ width: "max-content", color: "#FFFFFF" }}
                size="large"
              >
                Help
              </Button>
              <Button
                variant="text"
                sx={{ width: "max-content", color: "#FFFFFF" }}
                size="large"
              >
                Safety
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}></Grid>
        {/* </Container> */}
      </Grid>
    </>
  );
}

export default Nav;
