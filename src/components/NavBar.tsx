import { LogoDev } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Button, Box, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from 'react-router-dom';

const menuItems = [
  {
    label: "About us",
    path: "/about"
  },
  {
    label: "Certificate",
    path: "/certificate"
  },
  {
    label: "Verify Certification",
    path: "/verify-cert"
  },
  {
    label: "Contact",
    path: "/contact"
  }
];

  // const [mobileOpen, setMobileOpen] = useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };

  // const drawer = (
  //   <Box sx={{ width: 250 }} role="presentation" onClick={handleDrawerToggle}>
  //     <List>
  //       {menuItems.map((item) => (
  //         <ListItem key={item.label} component={RouterLink} to={item.path}>
  //           <ListItemText primary={item.label} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );



export default function NavBar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
      <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
        color="inherit"
        component={RouterLink}
        to="/"
        sx={{ minWidth: 0, p: 0, display: 'flex', alignItems: 'center' }}
        aria-label="SCW Home"
        >
        <LogoDev fontSize="large" color="inherit" />
        <Typography
          variant="h6"
          component="span"
          sx={{ ml: 1, display: { xs: 'none', sm: 'inline' } }}
        >
          SCW Certification
        </Typography>
        </Button>
      </Box>
      <Box
        sx={{
        flex: 6,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 2,
        justifyContent: 'center',
        }}
      >
        {menuItems.map((item) => (
          <Button key={item.label} color="inherit" component={RouterLink} to={item.path}>
            {item.label}
          </Button>
        ))}
      </Box>
       
      {/* Mobile menu */}
      <Box sx={{ flex: 6, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
        <Button
        color="inherit"
        aria-label="menu"
        sx={{ minWidth: 0 }}
        onClick={() => {
          // Implement mobile menu open logic here
        }}
        >
        <span style={{ fontSize: 24 }}>☰</span>
        </Button>
      </Box>
      <Box sx={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Button color="inherit">Login</Button> */}
      </Box>
      </Toolbar>
    </AppBar>
  );
}