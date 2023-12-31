'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const pages = ['Rooms', 'Roomies'];
const settings = [ 'Logout'];

function Navbar() {
    const router = useRouter();
    const [token, setToken] = React.useState<any>(null);
    const [user, setUser] = React.useState<any>(null);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
        
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setToken(null);

    }

    React.useEffect(() => {
        function checkUserData() {
            const item = localStorage.getItem('token')
            const user = localStorage.getItem('user')
            if (item) {
              setToken(item)
              setUser(user)
              console.log(user);
            }
          }
          checkUserData()
          window.addEventListener('storage', checkUserData)
        
          return () => {
            window.removeEventListener('storage', checkUserData)
          }
          
    }, [])

    const renderUser = () => {
        if (token !== null && user !== null) {
            return (
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Typography textAlign="center" color="white" sx={{ mr: 1 }}>{JSON.parse(user).name}</Typography>
                            <Avatar alt="Remy Sharp" src={JSON.parse(user).image} sx={{ width: 32, height: 32 }}/>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        
                            <MenuItem  onClick={handleLogout}>
                                <Typography textAlign="center">Log Out</Typography>
                            </MenuItem>
                        
                    </Menu>
                </Box>
            )
        } else {
            return(
                <Link href="/login">
                    <Button
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        Login
                    </Button>
                </Link>
            )
        }
    }

    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Image
                        src="/logo.webp"
                        alt="Vercel Logo"
                        width={100}
                        height={30}
                        quality={100}
                        style={{ marginRight: '1rem' ,cursor: 'pointer'}}
                        onClick={() => { router.push('/') }}

                    />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}>

                                    <Typography textAlign="center">{page}</Typography>

                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link href={`/${page.toLowerCase()}`} key={page}>
                                <Button
                                    key={page}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                    {renderUser()}


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
