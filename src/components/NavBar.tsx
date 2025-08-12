import { LogoDev } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';


export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
            <Box sx={{ flex: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                    color="inherit"
                    component={RouterLink}
                    to="/home"
                    sx={{ minWidth: 0, p: 0, display: 'flex', alignItems: 'center' }}
                    aria-label="SCW Home"
                >
                    <LogoDev fontSize="large" color="inherit" />
                    <Typography variant="h6" component="span" sx={{ ml: 1 }}>
                        SCW Certification
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ flex: 6, display: 'flex', alignItems: 'center', gap: 2, justifyContent: 'center' }}>
                <Button color="inherit" component={RouterLink} to="/about">About us</Button>
                |
                <Button color="inherit" component={RouterLink} to="/certificate">Certificate</Button>
                |
                <Button color="inherit" component={RouterLink} to="/verify-cert">Verify Certification</Button>
                |
                <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
            </Box>
            <Box sx={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
                {/* <Button color="inherit">Login</Button> */}
            </Box>
      </Toolbar>
    </AppBar>
  );
}