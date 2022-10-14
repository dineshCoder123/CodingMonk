import { Grid,Box, Stack,Button ,Typography, Container, Icon, IconButton} from '@mui/material';
import React from 'react'
import useResponsive from "../../../hooks/useResponsive";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import Typography from 'src/theme/overrides/Typography';
function Nav() {
       const isDesktop=useResponsive("up","md");
  return (
    <>
            <Grid container spacing={2} px={3} pt={2} direction="row" alignItems={"center"} >
            <Grid item xs={6} alignItems="center">
                <Stack direction={"row"} spacing={1} alignItems="center">

               {!isDesktop&& <IconButton >
                 <MenuRoundedIcon/>
                </IconButton>}
                <Typography variant="h5" color="#000000">
                CodingMonk 
                </Typography>
                </Stack>
               
                 
            </Grid>
            <Grid item xs={6}>
                   <Stack direction={"row"} spacing={2} width="100%" justifyContent={"end"}> 
                    {isDesktop &&<Stack direction={"row"} spacing={1}>
                    <Button variant="text"  sx={{width:'max-content', color:"#000000"}} size='large' 
              >Courses </Button>
              <Button variant="text" sx={{width:'max-content',color:"#000000"}} size='large' 
              >   Projects</Button>
              <Button variant="text"  sx={{width:'max-content',color:"#000000"}} size='large' 
              >  Study Material</Button>
              <Button variant="text"  sx={{width:'max-content',color:"#000000"}} size='large' 
              > Resources </Button>  

                    </Stack>}
                    <Button variant="outlined"  sx={{width:120,color:"#5544C0",borderColor:"#5544C0"}} size='large' p={3} disableElevation 
              >  Login</Button>
                    </Stack>
            </Grid>
            </Grid>
    </>  
  )
}

export default Nav;