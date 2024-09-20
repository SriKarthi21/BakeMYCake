import axios from 'axios'
import React, { useEffect,useRef,useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import { Box, Grid2 } from '@mui/material';
import UserForm from './UserForm';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
const CakeDetail = () => {
  let image=useRef();

  const {id}=useParams();
const[cake,setCake]=useState([]);
  useEffect(()=>{
    async function fetchById(){
    try{
    let response=await axios.get(`http://localhost:3000/cakes/${id}`);

      setCake(response.data)
      image.current=response.data.image.substr(6)
      console.log(image.current)
      console.log(response.data)
  }
catch(error){
  console.error(error)}
}
fetchById();


},[id])
  return (
    <Grid2 display={'flex'} justifyContent={'center'}
    bgcolor={'rgb(36, 218, 173)'} 
    container alignContent={'center'} >
       <Grid2>
    <Box maxWidth={720} >
      
      <Card sx={{ underline:"none",
          maxWidth: 500, m: 1, bgcolor: "lightyellow",
          borderRadius: 3,
        }} >
          <CardActionArea >

            <CardMedia
              component="img"
              height="220"
              image={image.current}
              alt="product image"
               objectFit="contain"

            />
            <CardContent >   
<Typography varient="h4" fontWeight={'bold'}>
Description
</Typography >
              <Typography  gutterBottom sx={{fontSize:12}}>
              {cake.description}
              </Typography>            
 <Typography varient="h4" fontWeight={'bold'}>
Delivery Information
</Typography>
<Typography sx={{fontSize:12,margin:0}}>
<ul >
  <li >
 Every cake we offer is handcrafted and since each chef has  his/her own way of baking and designing a cake, there might be slight variation in the product in terms of design and shape.
  </li>
  <li >
  Since cakes are perishable in nature, we attempt delivery of your order only once. The delivery cannot be redirected to other address.
  </li>
</ul>
</Typography>
<Typography varient="h4" fontWeight={'bold'}>
Care Instructions
</Typography>
<Typography sx={{fontSize:12}}>
<ul>
  <li>Store cream cakes in a refrigerator. Fondant cakes should be stored in an air conditioned environment.</li>
  <li>Slice and serve the cake at room temperature and make sure it is not exposed to heat. </li>
<li>Use a serrated knife to cut a fondant cake.</li>
<li>The cake should be consumed within 24 hours.</li>
<li>Enjoy your cake!</li>
</ul>

</Typography>

            </CardContent>

          </CardActionArea>
        </Card>
    </Box>
   </Grid2>
<Grid2 margin={2} maxWidth={'120vh'}  p={1} backgroundColor="whitesmoke" borderRadius={'10px'}>
  <UserForm  cakeDetails={cake} />

</Grid2>





    </Grid2>
  )
}

export default CakeDetail