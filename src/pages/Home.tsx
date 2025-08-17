import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <Box sx={{
      background: 'linear-gradient(to right, #e3f2fd 0%, #ffffff 50%, #e3f2fd 100%)',
      minHeight: "90vh",   // full screen height
      display: "flex",
      alignItems: "center", // vertical centering
    }}>
      <Container
        sx={{
          textAlign: 'center',
        }}
      >
        <Container sx={{ justifyContent: "center", alignItems: "center" }}>
          <Typography variant="h3" gutterBottom>
            Welcome to SCW International Certification
          </Typography>
          <Box>
            <Typography variant="body1" color="text.secondary">
              Your trusted partner for ISO certifications and quality assurance.
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              display: 'block',
              margin: '32px auto 0 auto',
              borderRadius: 4,
              boxShadow: 3,
              minWidth: 120,
              minHeight: 40,
              pt: 0.5,
              pl: 2,
              pr: 2,
              pb: 0,
              width: 'fit-content',
              textTransform: 'none',
            }}
            component={RouterLink}
            to="/certificate"
          >
            <Typography variant="h6" component="div" gutterBottom>
              Learn more
            </Typography>
          </Button>
        </Container>
      </Container>
    </Box>
  );
}