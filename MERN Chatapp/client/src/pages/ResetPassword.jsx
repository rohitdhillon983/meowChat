import React, { useState } from 'react'
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from '6pp';
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { server } from "../constants/config";
import { useNavigate, useParams } from 'react-router-dom';
import { use } from 'react';


const ResetPassword = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigateTo = useNavigate()
    const params = useParams();

    const token = params.token;
    const password = useInputValidation("");
    const confirmPassword = useInputValidation("")

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const toastId = toast.loading("Password Updation...");
    
        setIsLoading(true);
        const config = {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        };
    
        try {
          const { data } = await axios.post(
            `${server}/api/v1/user/resetpassword`,
            {
              password: password.value,
              confirmPassword: confirmPassword.value,
              token:token
            },
            config
          );
        //   dispatch(userExists(data.user));
          toast.success(data.message, {
            id: toastId,
          });
            navigateTo('/login')
        } catch (error) {
          toast.error(error?.response?.data?.message || "Something Went Wrong", {
            id: toastId,
          });
        } finally {
          setIsLoading(false);
        }
      };
  return (
    <div className="bg-[url('https://i.pinimg.com/originals/dd/ca/be/ddcabeb0bbdd9cdb4e5e911c18a4987c.jpg')] bg-cover bg-center">
      <div className="min-h-[100vh] flex items-center justify-center"
      >
        <div
          className="bg-[rgba(164,164,164,0.28)] border border-gray-600 p-4 rounded-lg"
        >
            <div>
              <Typography variant="h5" className="text-white">Reset Password</Typography>
              <form
                style={{
                  width: "100%",
                  marginTop: "1rem",
                }}
                onSubmit={handleSubmit}
              >
                <TextField
                  required
                  fullWidth
                  label="New Password"
                  margin="normal"
                  variant="outlined"
                  value={password.value}
                  onChange={password.changeHandler}
                />
                <TextField
                required
                fullWidth
                label="Confirm Password"
                margin='normal'
                variant='outlined'
                value={confirmPassword.value}
                onChange={confirmPassword.changeHandler}
                />

                <Button
                  sx={{
                    marginTop: "1rem",
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  fullWidth
                  disabled={isLoading}
                >
                  send email
                </Button>                
              </form>
            </div>        
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
