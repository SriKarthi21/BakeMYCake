import CakeCard from "./CakeCard";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));
  
function CardList({ data }) {

    // console.log(data[0].id)
    return (
        <> <Box sx={{ width: '100%' }}>
        <Grid  container spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 3, sm: 8, md: 12 }}  >
            {data.map((items) => (
                <Grid  size={{ xs: 3, sm: 4, md: 4 }}>
                    <CakeCard
                        key={items.id} cakeData={items}/>
                </Grid>
                )
            )}
        </Grid>
      </Box>
        </>
    )
}

export default CardList;