import { Grid,Button, Container, Typography, Card, CardContent, CardActions, CardMedia } from '@mui/material';
// import Grid from '@mui/material/Grid';
const isoCertifications = [
        { id: 1, name: 'ISO 9001', description: 'Quality Management Systems' },
        { id: 2, name: 'ISO 14001', description: 'Environmental Management Systems' },
        { id: 3, name: 'ISO 22000', description: 'Food Safety Management Systems' },
        { id: 4, name: 'ISO 45001', description: 'Occupational Health and Safety Management' },
        { id: 5, name: 'FSSC 22000 v.6', description: 'Food Safety Management Systems' },
      ];
export default function Certification() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h5" gutterBottom>
        We provide ISO Certifications.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {isoCertifications.map(cert => (
          // <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Card>
                <CardContent>
                <CardMedia
                  component="img"
                  height="120"
                  // image={`/images/certifications/${cert.name.replace(/\s+/g, '').toLowerCase()}.jpg`}
                  image={'/src/images/certifications/iso-symbol.png'}
                  alt={cert.name}
                />
                <Typography variant="h5" component="div">
                  {cert.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {cert.description}
                </Typography>
                </CardContent>
              {/* <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Declare
                </Button>
              </CardActions> */}
            </Card>
          // </Grid>
        ))}
      </Grid>
    </Container>
  );
}