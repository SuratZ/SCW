import { Container, Grid, Typography } from '@mui/material';
import { Box, Paper } from '@mui/material';
import RoundedButton from '../component/Button';
import { InfoCard } from '../constant/certDetail';
import './style.css'
export default function Contact() {

  const onClickEmail = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault(); // allow the href to serve as a non-JS fallback
                    const to = encodeURIComponent('chanyaporn@scw.co.th');
                    const subject = encodeURIComponent('Contact SCW International');
                    const body = encodeURIComponent('');
                    const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${to}&subject=${subject}&body=${body}`;

                    // Basic detection: Windows + Edge (adjust if you need finer granularity)
                    const ua = navigator.userAgent || '';
                    const isWindowsEdge = /Windows/.test(ua) && /Edg/.test(ua);

                    const urlToOpen = isWindowsEdge ? outlookUrl : `mailto:chanyaporn@scw.co.th?subject=${subject}&body=${body}`;
                    window.open(urlToOpen, '_blank', 'noopener,noreferrer');
  }

  return (
    <Box sx={{
        display: "flex",
        // alignItems: "center", // vertical centering
        minHeight: "90vh", // full screen height
      }}>
        <Container sx={{
          textAlign: 'center',
          pt: 6,  
          pb: 2
        }}>
          <Typography            
            className="navy-text"
            variant="h6"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: 24,}}>
            CONTACT
          </Typography>
          <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            pt: 4,
            gap: 2,
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 3 }}>
            <Grid size={{ xs: 1, sm: 1, md: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  flex: 1,
                  // minWidth: 200,
                  height: 500,
                  overflow: 'hidden',
              }}
            >
              <iframe
                title="SCW Location"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.3251192220227!2d100.51019127470586!3d13.637976486742142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2a3cea5e6de43%3A0xd903fda44e387824!2sSCW%20International%20Certification%20Co.%2C%20Ltd.!5e0!3m2!1sen!2sus!4v1754984431617!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
            </Grid>
            <Grid size={{ xs: 1, sm: 1, md: 1 }}>
              <InfoCard />
            </Grid>
          </Grid>
        </Box>

        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            mt: 2,
            mb: 4,
            gap: 2,
            pt: 4,
          }}
        >
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 2 }}>
            <Grid size={{ xs: 2, sm: 2, md: 2 }}>
                <div style={{gap: 12, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <RoundedButton
                  children="Facebook"
                  onClick={() => window.open("https://www.facebook.com/scwinternational", "_blank")}
                  />
                  <RoundedButton
                  children={<>Email</>}
                  onClick={(e: React.MouseEvent<HTMLElement>) => {
                    onClickEmail(e);
                  }}
                  style={{
                    background: 'white',
                    color: 'black',
                  }}
                  />
                </div>
            </Grid>
          </Grid>
        </Box>
        
      </Container>
    </Box>

  );
}