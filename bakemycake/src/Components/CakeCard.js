import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled/macro';
import {StyledLink} from './Header'
function CakeCard({ cakeData }) {

  const { id, name, price, image } = cakeData;


  return (
    <>           
    <StyledLink to={`/cakes/${id}`} sx={{textDecoration:"none"}} >

        <Card sx={{ 
          maxWidth: 420, maxHeight: 300, m: 2, bgcolor: "rgb(36, 218, 173)",
          borderRadius: 3, boxShadow: "5px 5px 10px rgb(210, 71, 228)"
        }} >
          <CardActionArea >

            <CardMedia
              component="img"
              height="180"
              image={image}
              alt="card images"
            />
            <CardContent >   

              <Typography  gutterBottom variant="h5" component="div">
                {name}
              </Typography>            

              <Typography variant="subtitle2" sx={{ color: 'blue' }}>
                {price} (&#8377;)</Typography>
            </CardContent>

          </CardActionArea>
        </Card>
        </StyledLink>


    </>
  )
}

export default CakeCard;