import React from 'react'
import Paper from '@mui/material/Paper'
import { Button, Container, FormControl, Grid2, Input, TextField,Typography } from '@mui/material'

import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled/macro';
import StarsIcon from '@mui/icons-material/Stars';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import { red } from '@mui/material/colors';
import { Navigate, useNavigate } from 'react-router-dom';

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin:0;
`;

const UserForm = ({ cakeDetails }) => {
  const navigate = useNavigate();
  async function saveForm(data) {
    try {
      const response = await axios.post("http://localhost:3000/orders", data);
      console.log(response.data);

      alert("SUBMITTED")
      navigate("/");
    } catch (error) {
      console.log(error)
    }
  }
  const{name,rating,price,id}=cakeDetails
  const onSubmit = (data) => {
    console.log("button clicked")
    data={...data,id,name}
    saveForm(data);
    reset();
  }
  const { register, control, handleSubmit, formState: { errors }, trigger, reset, watch } = useForm();

  return (<>
    <Grid2 container   spacing={2}>
      <Grid2 display={'flex'}  >
        <form style={{ p:5,display: "flex", flexDirection: 'column' ,overflow:'hidden'}}
          onSubmit={handleSubmit(onSubmit)}   >
          <Typography variant='h4' color='blue'>{name}  <StarsIcon />{rating}</Typography>
          <Typography variant='subtitle' p='2px' bgcolor={"gray"} color='white'>Rs {price}</Typography>
          <Grid2 display={'flex'} item xs={12} sm={12} md={6}>
            <TextField variant='filled' name='firstName' {...register("firstName", {
              required: "Name is required",
            })}
              onBlur={(e) => trigger("firstName")}

              type='text' placeholder='First Name *' />
            <Error>{errors.firstName?.message}</Error>

            <TextField variant='filled' name='lastName' {...register("lastName", {
              required: {
                value: true, message: "Last Name is required"
              }
            })}
              onBlur={(e) => trigger("lastName")}

              type='text' placeholder='Last Name *' />
            <Error>{errors.lastName?.message}</Error>
            <br />
          </Grid2>
        <Grid2>
          <TextField variant='filled'
            name="email" {...register("email", {
              required: "Email is required ",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Enter valid mail address",
              },
            })}
            onBlur={(e) => trigger("email")}
            placeholder="Email *"
            type="email"
          />
          <Error>{errors.email?.message}</Error>
          <TextField variant='filled' name="phoneNo"
            {...register("phoneNo", {
              required: "Phone number is required",
              pattern: {
                value: /^[7-9]\d{9}$/,
                message: "Valid phone number contains 10 digits starting with 7 / 8 /9"
              }
            })
            }
            onBlur={(e) => trigger("phoneNo")}
            placeholder='Phone No' type="tel"
          />
           <Error>{errors.phoneNo?.message}</Error>

        </Grid2>
          <br />
          <Grid2 display={'flex'}>
            <TextField name="date" variant='filled'
              {...register("date", {
                required: "Date is required",
                pattern: {
                  value: /^(?:[0-9]{2})|(?:[0-9]{4})-(?:[0-9]{2})-(?:[0-9]{2})$/,
                  message: "Enter valid Date",
                },
              })}
              onBlur={(e) => trigger("date")}
              placeholder='Choose Delivery Data' type="date"
            />
            <Error>{errors.date?.message}</Error>

            <TextField name="quantity" variant='filled'
              {...register("quantity", {
                required: "Quantity is required",
              })}
              onBlur={(e) => trigger("quantity")}
              placeholder='Quantity' type="text"
            />
            <Error>{errors.quantity?.message}</Error>

            <TextField name="weight" variant='filled'
              placeholder='Weight?Pieces' type="text"
            />
          </Grid2>
          <br />
          <TextField name="address" variant='filled'
            {...register("address", {
              required: "address is required",

            })} onBlur={(e) => trigger("phoneNo")}
            placeholder="Address" type="text"
          />
          <Error>{errors.address?.message}</Error>

          <br />
          <Grid2 display={'flex'}>
            <TextField name="city" variant='filled'
              {...register("city", {
                required: "city is required",
              })}
              onBlur={(e) => trigger("city")}
              placeholder='city'
            />
            <Error>{errors.city?.message}</Error>

            <TextField name='state' variant='filled'
              {...register("state", {
                required: "State is required",
              })}
              onBlur={(e) => trigger("state")}
              placeholder='State'
            />

            <Error>{errors.state?.message}</Error>
            <TextField name="zipCode" variant='filled'
              {...register("zipCode", {
                required: "zip code is required",
                maxLength: { value: 6, message: "Zip code must be 5 digits" },
                pattern: {
                  value: /^\d{6}$/, message: "Valid Zip Code should have 6 digits"
                }
              })}
              onBlur={(e) => trigger("zipCode")}
              placeholder='zip code' type="text"
            />
            <Error>{errors.zipCode?.message}</Error>
            <br />
          </Grid2>

           <TextField placeholder="Description"  variant='filled'/>
        <br />
          <Grid2 display={'flex'}   justifyContent={'space-evenly'}>         
              <Button variant='contained' type="reset" onClick={() => reset()}>Reset</Button>
              <Button variant='contained' type="submit">Submit</Button>
          </Grid2>

        </form>
      </Grid2>


    </Grid2>


  </>
  )
}

export default UserForm