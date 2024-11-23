import { Close } from "@mui/icons-material";
import { Box, Container, Grid, IconButton, Typography } from "@mui/material";

export default function PromoBanner(){
  return <Box className="bg-[#FFECD1]" >
    <Container maxWidth={"xl"}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box component={"div"} className="flex justify-between items-center py-2 text-black">
            <IconButton className="text-black text-lg md:text-xl">
              <Close />
            </IconButton>
            <Typography className="text-sm md:text-base lg:text-lg text-start md:text-center w-full " variant="body2">
              Get 50% discount in all product from April to December 2025
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>;
}