import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { Icon } from '@iconify/react';


const CardInfo = () => {
  return (
    <div>
        <Card sx={{ maxWidth: 345 ,pt:6}}>

        <Grid container spacing={2}>
  <Grid item xs={7}>
  <Icon icon="material-symbols-light:price-change-outline-rounded"   style={{ color: 'red',fontSize: '144px',borderRadius:80,backgroundColor:'#ffe6e6' }} />

  </Grid>
  <Grid item xs={5}>
  <h4>Earning</h4>
  <h2>$147k</h2>
  <h6> <Icon icon="i-oi-arrow-top"  style={{ color: '#000', fontSize: '14px' }} />37.8% this month</h6>
  </Grid>
  
</Grid>
      {/* <CardActionArea>
        <CardMedia
        sx={{borderRadius:22}}
          component="img"
          height="30"
          
          alt="green iguana"
        />
        <Icon icon="material-symbols-light:price-change-outline-rounded"   style={{ color: 'red',fontSize: '144px',borderRadius:25 }} />

        <CardContent>
         
          <Typography variant="body2" color="text.secondary">
          <Icon icon="material-symbols-light:price-change-outline-rounded"   style={{ color: 'red',fontSize: '24px' }} />

            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      
      </CardActions> */}

      </Card>

    </div>
  )
}

export default CardInfo
