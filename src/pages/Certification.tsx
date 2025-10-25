import Grid from "@mui/material/Grid";
import { Container, Typography, Card, CardContent, CardMedia, Box, Modal, Button } from '@mui/material';
import React from "react";
import '../components/modal.css';


const isoCertifications = [
  { id: 1, image: 'iso', name: 'ISO 9001:2015', description: 'Quality Management Systems' },
  { id: 3, image: 'iso', name: 'ISO 14001:2015', description: 'Environmental Management Systems' },
  { id: 4, image: 'iso', name: 'ISO 22000:2018', description: 'Food Safety Management Systems' },
  { id: 5, image: 'iso', name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management' },
  { id: 6, image: 'cert', name: 'FSSC 22000', description: '' },
  { id: 7, image: 'cert', name: 'GHPs/HACCP', description: '' },
];

export default function Certification() {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedCert, setSelectedCert] = React.useState<number | null>(null);

  const onClickCard = (certId: number) => {
    // const selectCard = isoCertifications.find(cert => cert.id === certId);
    // alert(`Clicked on certification ID: ${certId}`);
    setSelectedCert(certId);
    setOpenModal(true);
  }

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
                <Card 
                  style={{cursor: "pointer"}}
                  onClick={() => onClickCard(cert.id)}>
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
      {openModal && selectedCert !== null && (
        <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-overlay">
          <Card className="modal-content">
            <CardContent style={{maxHeight: '80vh', overflow: 'scroll'}}>
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Button
                  onClick={() => setOpenModal(false)}
                  aria-label="Close modal"
                  title="Close"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 24,
                    lineHeight: 1,
                    padding: 4,
                  }}
                >
                  ×
                </Button>
              </Box>
              <Typography variant="h5" component="div" fontWeight={'bold'}>
                {isoCertifications.find(cert => cert.id === selectedCert)?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isoCertifications.find(cert => cert.id === selectedCert)?.description}
              </Typography>
              <Typography variant="body1" component='div' sx={{ marginTop: 2 , whiteSpace: 'pre-wrap'}}>
                Detailed information about {isoCertifications.find(cert => cert.id === selectedCert)?.name} will be displayed here. 
                Blorpting flarnix quembla zindle, grobble wex furinato. Zarping dolen fritcha merv, quastor binzel hapto. 
                Frimble-narvo skelpit, tromba-lunet veshka, orbilto quernash. Flimzor gubba trovi, nesta plim quorak, 
                vindra-zelto praxim. Yebble frintor suzma, plechta nornis vulta; grishen, troxil, bempa. 
                Zuntra quiblo tenmar, pheska dorvil, lurnot rexima. Prafno zelta bundor xim, sorken plimta; 
                varno gestu plinthar, quembla-drentor snyph. Mervak glintor, heshna polvite, crunbo jastel; 
                zophta frendil orba. 
                Flarn quexim: "sibra vorntel" — shomka plever nitra, jundra plemso kantro. 
                Repeatum: blinta zorka, flemito bursha, glencho werva, hundo prax. 
                This is extended demo gibberish to illustrate overflow and wrapping behavior in the modal content area. 
                Blorpting flarnix quembla zindle, grobble wex furinato. Zarping dolen fritcha merv, quastor binzel hapto. 
                Frimble-narvo skelpit, tromba-lunet veshka, orbilto quernash. Flimzor gubba trovi, nesta plim quorak, 
                vindra-zelto praxim. Yebble frintor suzma, plechta nornis vulta; grishen, troxil, bempa.
              </Typography>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>


  );
}