'use client'
import { useState } from "react";
import PageTemplate from "../components/ui/PageTemplate";
import styles from "../styles/login.module.css"
import { Button, IconButton, Typography,TextField,Divider } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { logIn } from "../services/auth";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    
    const handleLogin = () => {
        if (email == "" || password == "") {
            return;
        }
        logIn({
            email,
            password
        }).then((res) => {
            if (res.status === 201) {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                router.push('/');
            }
        }
        ).catch((err) => {
            console.log(err);
        })
    }

    return (
        <PageTemplate>
            <div className={styles.container}>
                <div className={styles.form}>
                    <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
                        Welcome to RooMy
                    </Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>
                        Where you can find your perfect roommate
                    </Typography>
                    <TextField label="Email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'row', padding: '1rem',justifyContent:'center' }}>

                        <Button variant="contained" color="primary" style={{ marginRight: '1rem',minWidth:120}} onClick={handleLogin}>
                            Login
                        </Button>

                        <Link href="/register">
                            <Button variant="outlined" color="primary"  style={{ marginLeft: '1rem',minWidth:120 }}>
                                Register
                            </Button>
                        </Link>
                    </div>
                    <Divider variant="inset" component="div" />
                    <div>
                        <Typography variant="subtitle1" align="center" gutterBottom color="textSecondary">
                            Or login with social media
                        </Typography>
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', padding: '1rem', justifyContent: 'center' }}>
                            <IconButton color="primary" aria-label="upload picture" component="span" style={{ marginRight: '1rem' }} >
                                <GoogleIcon fontSize="large" />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <FacebookIcon fontSize="large" />
                            </IconButton>

                        </div>
                    </div>


                </div>
            </div>
        </PageTemplate>
    );
}