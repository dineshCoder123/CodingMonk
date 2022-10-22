import React from "react";
import { Grid, Typography, Stack, Container, Button, Box } from "@mui/material";
import { User } from "phosphor-react";
// import Typography from 'src/theme/overrides/Typography'

function Nav() {
  return (
    <>
      <Box sx={{ backgroundColor: "#1B2C52" }}>
        <Container>
          <Grid container direction="row" py={3}>
            <Grid item xs={12} md={6} spacing={2}>
              <Stack
                direction={"row"}
                alignItems="center"
                // justifyContent={"start"}
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

            <Grid item xs={12} md={6} spacing={2}>
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"end"}
                spacing={4}
              >
                <Stack direction="row" alignItems={"center"}>
                  <User size={32} color="#FFFFFF" />
                  <Button
                    variant="text"
                    sx={{ width: "max-content", color: "#FFFFFF" }}
                    size="large"
                  >
                    Login
                  </Button>
                </Stack>
                <Stack direction="row">
                  <Button
                    variant="outlined"
                    sx={{
                      width: "max-content",
                      color: "#FFFFFF",
                      backgroundColor: "#000000",
                    }}
                    size="large"
                  >
                    Download App
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Nav;
