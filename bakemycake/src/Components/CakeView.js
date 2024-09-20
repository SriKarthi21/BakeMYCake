import CakeList from'./CakeList'
import { Box, Grid2 } from '@mui/material';
function CakeView({data}){


    return(
        <>
        <Grid2 sx={{
  backgroundColor: "rgb(38, 40, 40)",
  color: "#A9A9A9",
  textAlign: "center"}}>
            <Grid2 sx={{
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  color: "white",overflow:"hidden"}}>
                <div>
                    <h2>Birthday Cake Delivery</h2>
                    <p>Same Day and Midnight Delivery</p>
                    <button>Shop Now</button>
                </div>
                <Box
      component="img"
      sx={{
        width: '100vh',
        height: '40vh',
      }}
      alt="Responsive image"
      src="/cakes/Classic Cheesecake.jpg"
    />
                {/* <div >  
                    <img src="/cakes/Classic Cheesecake.jpg" alt="image"/>
                </div> */}
            </Grid2>
            

           <CakeList  data={data}/>
        </Grid2>
        </>
    )
}

export default CakeView;