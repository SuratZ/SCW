import { Grid, Container, Typography, Card, CardContent, CardMedia } from '@mui/material';
// import Grid from '@mui/material/Grid';
const isoCertifications = [
        { id: 1, image: 'iso',name: 'ISO 9001:2015', description: 'Quality Management Systems' },
        { id: 3, image: 'iso',name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
        { id: 4, image: 'iso',name: 'ISO 22000:2018', description: 'Food Safety Management Systems' },
        { id: 5, image: 'iso',name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management' },
        { id: 6, image: 'iso',name: 'FSSC 22000 v6.0', description: '' },
        { id: 7, image: 'safety',name: 'GHPs/HACCP', description: '' },
      ];
export default function Certification() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2}} >
        We provide ISO certifications and others.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {isoCertifications.map(cert => (
          // <Grid item xs={12} sm={6} md={4} key={cert.id}>
            <Card>
                <CardContent>
                <CardMedia
                  component="img"
                  sx={{
                    height: 120,
                    objectFit: 'contain',
                  }}
                  image={`/src/images/certifications/${cert.image.replace(/\s+/g, '').toLowerCase()}.png`}
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