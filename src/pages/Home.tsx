import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to My MUI App
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is a React + TypeScript + MUI starter page. aa
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
    </Container>
  );
}