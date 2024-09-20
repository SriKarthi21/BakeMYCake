import { Grid2, Typography } from '@mui/material'
import React from 'react'

const PageNotFound = () => {
  return (
    <Grid2 alignContent={'center'} margin={"auto"} fontSize={40} height={450} 
    sx={{color:"red",ml:'40%'}}>
        Page Not Found
        <Typography marginLeft={5} color='white'> Requested page not found !!!</Typography>
    </Grid2>
  )
}

export default PageNotFound