import { Button, Container, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container sx={{ textAlign: 'center', paddingTop: 5 , maxWidth:"sm", backgroundColor:"LightGrey"}}>
        <Toolbar disableGutters>

        </Toolbar>
      <Typography variant="h3" gutterBottom>
        Welcome to My MUI App
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a React + TypeScript + MUI starter page.
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}