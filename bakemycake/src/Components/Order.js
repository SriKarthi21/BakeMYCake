import axios from 'axios';
import {useState,useEffect} from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid2 } from '@mui/material';
const Order = () => {

const[order,setOrder]=useState([])


useEffect(()=>{
  async function fetchOrders(){
   try{
 
     const response=await axios.get("http://localhost:3000/orders");
     console.log(response.data)
     setOrder(response.data)
   }catch(error){
 console.log("error",error)
   }
   }
   fetchOrders();
 },[])

  return (
    <Grid2 height={450}>



<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"yellow",color:"white"}}>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone </TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">State</TableCell>
            <TableCell align="center">ZipCode</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
        {/* {order.map((items,index)=>(
       <p key={index}    >{items.email}</p> 
      ))} */}

          {order.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">

                {row.id}
              </TableCell>
              <TableCell align="right">{row.firstName}{row.lastName}</TableCell>

              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phoneNo}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.state}</TableCell>
              <TableCell align="center">{row.zipcode}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid2>
  )
}

export default Order