import React, {useState, useEffect} from 'react'
import {Grid, Paper, TextField} from '@material-ui/core';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useHistory } from 'react-router-dom';
import axios, { AxiosRequestConfig } from 'axios';
import { useLoginUserMutation } from '../../slices/userSlice';
import { Button } from 'antd';


const paperStyle = {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: '20px auto'
}

const textfieldStyle = {
    margin:'10px'
}

const avatarStyle = {
    backgroundColor: '#2f7fad'
}


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [loginuser, { isLoading, data, isSuccess, isError }] = useLoginUserMutation();

    useEffect(()=>{
        if(localStorage.getItem("authToken")){
            history.push('/')
        }
    },[]);


    const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(email && password){
            loginuser({
                email,
                password
            })
        }
    };

    useEffect(() =>{
        (() =>{
            if(isSuccess){
                localStorage.setItem("authToken", data?.token || '');
                history.push('/')
            }
        })()
    }, [isSuccess, data, history]);


    return (
        <div className='col-md-6 m-auto'>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                <Grid item container  justifyContent="center">
                    <h3 className='text-primary font-weight-bold'>ADMIN</h3>
                </Grid>
            <form
            onSubmit={onSubmit}
            >
                {isError && <span className="error-handle">Someting went wrong with your login</span>}
               <TextField 
                    style={textfieldStyle}
                    type="email" 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    fullWidth 
                    placeholder="Email address" 
                    label="Email" 
                    required
                    variant="standard"
                />
                <TextField 
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" 
                    fullWidth 
                    value={password}
                    placeholder="Password" 
                    label="Password" 
                    required
                    variant="standard"
                    style={textfieldStyle}
                />
               
               <Button type='primary' loading={isLoading} htmlType="submit" block style={{
                    marginLeft: 10,
                    marginTop: 20
               }}>Sign in</Button>
            </form>
            </Paper>
            </Grid>
        </div>
    )
}

export default Login
