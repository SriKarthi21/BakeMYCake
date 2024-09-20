import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Grid2 } from '@mui/material';
export default  function Search( {onfilterItem,onSearch}){
        

       
        let  filterCategory=["CAKES","CUP CAKES","CHEESE CAKES","COOKIES" ,"BROWNIES","CHOCOLATES","MUFFINS",]
    return(
         <Box  sx={{ width: '100%', bgcolor: 'background.paper', display:"flex", justifyContent:"space-evenly"}}>
<Grid2 item xs={4} sm={6} md={3} lg={2}>

        <Button variant="button" value={onfilterItem=""}  
        onClick={onSearch}>ALL</Button>
        {filterCategory.map((category,index)=>(
         <Button  variant="button"   onClick={onSearch} value={onfilterItem=category}   key={index}>
                {category}
        </Button>
   ))}
   </Grid2>

    </Box>
    )}


