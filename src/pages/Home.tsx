import { Box, Button, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
    <Box sx={{
      // background: 'linear-gradient(to right, #e3f2fd 0%, #ffffff 50%, #e3f2fd 100%)',
      backgroundImage: 'url(./images/cat1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      // backgroundPositionY: '70%',
      minHeight: '90vh',
      display: "flex",
      textAlign: 'center',
      alignItems: "center", // vertical centering
    }}>
      <Container sx={{ justifyContent: "center", dflexDirection: "column"}}>
        <Typography color="white" variant="h3" gutterBottom sx={{fontFamily: 'Roboto', fontWeight: 'bold'}}>
          SCW International Certification
        </Typography>
        <Typography color="white" variant="h6" gutterBottom>
          Your trusted partner for ISO certifications and quality assurance.
        </Typography>
      </Container>
    </Box>

    <Box  sx={{
      display: "flex",
      textAlign: 'center',
      alignItems: "center", // vertical centering
      py: 5,
    }}>
      <Container sx={{ justifyContent: "center", dflexDirection: "column"}}>
        <Typography variant="h3" gutterBottom sx={{fontFamily: 'Roboto', fontWeight: 'bold'}}>
          ayayayayayayayayayaya
        </Typography>
      </Container>
    </Box>
    <Box sx={{
      backgroundImage: 'url(./images/cat2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '60vh',
      display: "flex",
      textAlign: 'center',
      alignItems: "center", // vertical centering
    }}/>
    <Box sx={{
      minHeight: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // top aligned
      py: 5,
      px: 50,
    }}>
      <Container sx={{ width: '48%' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>
          ABOUT OUR COMPANY
        </Typography>
      </Container>
      <Container sx={{ width: '48%' }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {"SCW International Certification Co., Ltd. Established since 4/12/2001, operating in the business of providing certification services"}
          {", ISO 9001, ISO 14001 environmental system, ISO 14001 environmental system, occupational health and safety, ISO 45001, food safety, "}
          {"GHPs/HACCP, ISO 22000, FSSC 22000, medical equipment ISO 13485 from LMS Assessments Limited, which is certified by SCC, Canada "}
          {"and from LMS, EGAC can search for certification information on the LMS website (parent company) and IAF's website, which is the principle of "}
          {"showing the status of the certificate that is valid according to international principles. To expand market opportunities for domestic and international products.\n\n "}
          {"Currently, more than 200 companies have issued ISO standard system certification for all systems in Thailand."}
        </Typography>
      </Container>
    </Box>
    <Box sx={{
      backgroundImage: 'url(./images/cat3.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '80vh',
      display: "flex",
      textAlign: 'center',
      alignItems: "center", // vertical centering
    }}/>
    <Box sx={{
      minHeight: '20vh',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start', // top aligned
      py: 5,
      px: 50,
    }}>
      <Container sx={{ width: '48%' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Roboto', fontWeight: 'bold', textAlign: 'center' }}>
          OUR SERVICES
        </Typography>
      </Container>
      <Container sx={{ width: '50%' }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          <li>ISO 9001:2015 Quality Management Systems</li>
          <li>ISO 13485:2016 Medical Devices Quality Management Systems</li>
          <li>ISO 14001:2015 Environmental Management Systems</li>
          <li>ISO 22000:2018 Food Safety Management Systems</li>
          <li>ISO 45001:2018 Occupational Health and Safety Management</li>
          <li>FSSC 22000</li>
          <li>GHPs/HACCP</li>
        </Typography>
      </Container>
    </Box>
    <Box sx={{
      backgroundImage: 'url(./images/cat4.png)',
      backgroundSize: 'auto',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      minHeight: '90vh',
      display: "flex",
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: "center", // vertical centering
    }}>
      <Container sx={{ justifyContent: "center"}}>
        <Typography color="black" variant="h3" gutterBottom sx={{fontFamily: 'Roboto', fontWeight: 'bold'}}>
          READY TO ELEVATE YOUR BUSINESS?
        </Typography>
        <Button variant='contained' component={RouterLink} to="/contact">Click Me</Button>
      </Container>
    </Box>
    </>
  );
}