import Grid from "@mui/material/Grid";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Modal,
  Button,
} from "@mui/material";
import React from "react";
import "../component/modal.css";
import {
  CertHaccp,
  Fssc,
  Iso13485,
  Iso14001,
  Iso22000,
  Iso45001,
  Iso9001,
} from "../constant/certDetail.tsx";
import './style.css'

const isoCertifications = [
  {
    id: 1,
    image: "iso",
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
    details: <Iso9001 />,
  },
  {
    id: 2,
    image: "iso",
    name: "ISO 13485:2016",
    description: "Medical Devices Quality Management Systems",
    details: <Iso13485 />,
  },
  {
    id: 3,
    image: "iso",
    name: "ISO 14001:2015",
    description: "Environmental Management Systems",
    details: <Iso14001 />,
  },
  {
    id: 4,
    image: "iso",
    name: "ISO 22000:2018",
    description: "Food Safety Management Systems",
    details: <Iso22000 />,
  },
  {
    id: 5,
    image: "iso",
    name: "ISO 45001:2018",
    description: "Occupational Health and Safety Management",
    details: <Iso45001 />,
  },
  {
    id: 6,
    image: "cert",
    name: "FSSC 22000",
    description: "",
    details: <Fssc />,
  },
  {
    id: 7,
    image: "cert",
    name: "GHPs/HACCP",
    description: "",
    details: <CertHaccp />,
  },
];

export default function Certification() {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedCert, setSelectedCert] = React.useState<number | null>(null);

  const onClickCard = (certId: number) => {
    setSelectedCert(certId);
    setOpenModal(true);
  };

  return (
    <>
      <Container
        sx={{
          // background: 'linear-gradient(to bottom, #ffffff 90%, #e7b535dc 100%)',
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            pb: 10,
            mb: 4,
          }}
        >
          <Typography
            className="navy-text"
            variant="h6"
            gutterBottom
            sx={{
              textAlign: 'center ',
              fontFamily: "Roboto",
              fontWeight: "bold",
              pb: 2,
              pt: 6,
              fontSize: 24,
            }}
          >
            OUR SERVICES
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {isoCertifications.map((cert) => (
              <Grid key={cert.id} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card
                  className="card-hover"
                  sx={{ cursor: "pointer" }}
                  onClick={() => onClickCard(cert.id)}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: 120,
                      objectFit: "contain",
                    }}
                    image={`./images/certifications/${cert.image
                      .replaceAll(/\s+/g, "")
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
        </Box>
      </Container>
      {openModal && selectedCert !== null && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          className="modal-overlay"
        >
          <Card className="modal-content">
            <CardContent style={{ maxHeight: "80vh" }}>
              <Box sx={{ position: "absolute", top: 8, right: 8 }}>
                <Button
                  onClick={() => setOpenModal(false)}
                  aria-label="Close modal"
                  title="Close"
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 24,
                    lineHeight: 1,
                    padding: 12,
                  }}
                >
                  ×
                </Button>
              </Box>
              <Typography
                variant="h5"
                component="div"
                style={{ fontWeight: "bold", marginBottom: "4px" }}
              >
                {
                  isoCertifications.find((cert) => cert.id === selectedCert)
                    ?.name
                }
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {
                  isoCertifications.find((cert) => cert.id === selectedCert)
                    ?.description
                }
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{
                  marginTop: 2,
                  whiteSpace: "pre-wrap",
                  maxHeight: "60vh",
                  overflow: "scroll",
                }}
              >
                {isoCertifications.find((cert) => cert.id === selectedCert)
                  ?.details || "Details coming soon."}
              </Typography>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
}
