import { AppBar, Toolbar, Typography, Button, Box, Drawer } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useState } from "react";

const menuItems = [
  {
    label: "About",
    path: "/about",
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


export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={() => setMobileOpen(false)}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Menu
      </Typography>
   
        {menuItems.map((item,index) => (
          <Box key={index} pb={2} pl={2}>
            <Button key={item.label} color="inherit" component={RouterLink} to={item.path}>
              {item.label}
            </Button>
          </Box>
        ))}
    </Box>
  );

  
  return (
    <AppBar position="sticky" sx={{bgcolor: '#012C4E', color: '#EAD292'}}>
      <Toolbar>
      <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
        color="inherit"
        component={RouterLink}
        to="/"
        sx={{ minWidth: 0, p: 0, display: 'flex', alignItems: 'center' }}
        aria-label="SCW Home"
        >
        <Typography
          variant="h6"
          component="span"
          sx={{
            ml: 1,
          }}
        >
          <Box component="span" sx={{ display: { xs: 'inline', sm: 'inline', md: 'none' } }}>
            SCW
          </Box>
          <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
            SCW Certification
          </Box>
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
          onClick={handleDrawerToggle}
        >
          <span style={{ fontSize: 24 }}>☰</span>
        </Button>
      </Box>
      <Box sx={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
        {/* <Button color="inherit">Login</Button> */}
      </Box>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {DrawerList}
      </Drawer>
      </Toolbar>
    </AppBar>
  );
}