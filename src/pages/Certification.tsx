import Grid from "@mui/material/Grid";
import { Container, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const isoCertifications = [
  { id: 1, image: 'iso', name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { id: 3, image: 'iso', name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
  { id: 4, image: 'iso', name: 'ISO 22000:2018', description: 'Food Safety Management Systems' },
  { id: 5, image: 'iso', name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management' },
  { id: 6, image: 'cert', name: 'FSSC 22000', description: '' },
  { id: 7, image: 'cert', name: 'GHPs/HACCP', description: '' },
];
export default function Certification() {
  return (
    <>
      <Box sx={{
        backgroundColor: '#ffffff',
        display: "flex",
        alignItems: "center", // vertical centering
      }}>
        <Container sx={{
          textAlign: 'center',
          mt: 4
        }}>
          <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold' }} >
            We provide ISO certifications and others.
          </Typography>

        </Container>
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #e3f2fd 100%)',
          display: "flex",
          mt: 4,
          minHeight: "80vh"
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            pb: 10
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {isoCertifications.map((cert) => (
              <Grid key={cert.id} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 120,
                      objectFit: "contain",
                    }}
                    image={`./images/certifications/${cert.image
                      .replace(/\s+/g, "")
                      .toLowerCase()}.png`}
                    alt={cert.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {cert.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>


  );
}