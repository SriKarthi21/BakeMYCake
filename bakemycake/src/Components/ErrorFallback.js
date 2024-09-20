import { Error } from "@mui/icons-material";
import { Button, Grid2, Typography } from "@mui/material";
import { useErrorBoundary } from "react-error-boundary";
  function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <Grid2 container bgcolor={'greenyellow'} height={'100vh'}>
    <Grid2 role="alert" sx={{
      width: '600px',justifyContent:'center',
      textalign: 'center',alignItems:'center',
      margin: '0 auto',m:30,ml:80,
      fontSize: '1.3em'}}>
      <Typography>Something went wrong. Try after sometime</Typography>
      <Error sx={{ color: "red" }}>{error.message}</Error>
      <Button  variant="contained" onClick={resetBoundary}>Try again</Button>
    </Grid2>
    </Grid2>

  );
}


export default ErrorFallback;

// function ErrorFallback({error}){
//   return(
//     <div role="alert">
//       <p>No user provided</p>
//       <pre>{error.message}</pre>
//     </div>
//   );
// }


