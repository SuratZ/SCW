import { Button, Container, Typography } from '@mui/material';
import { Box, Paper } from '@mui/material';

export default function Contact() {
  return (
    <Container
      sx={{
        textAlign: 'center',
        mt: 4,
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Contact us
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          mt: 4,
          mb: 4,
          gap: 2,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            flex: 2,
            minWidth: 300,
            height: 400,
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
        <Paper
          elevation={3}
          sx={{
            flex: 1,
            minWidth: 300,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
          }}
        >
          <Typography variant="h5" gutterBottom>
            SCW International Certification Co., Ltd.
          </Typography>
          <Typography variant="body1" gutterBottom>
            85/939 Soi Prachauthit 79, <br/>
            Prachauthit Road Tungkru Subdistrict <br/>
            Tungkru District Bangkok 10400, Thailand
          </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" style={{ verticalAlign: 'middle' }}>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </Box>
            <a href="mailto:chanyaporn@scw.co.th" style={{ color: 'inherit', textDecoration: 'none' }}>
              chanyaporn@scw.co.th
            </a>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
            <Box component="span" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" style={{ verticalAlign: 'middle' }}>
              <path d="M0 0h24v24H0z" fill="none"/>
              <path fill="currentColor" d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
              </svg>
            </Box>
              (+66) 81 645 5821
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <Box component="span" sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" style={{ verticalAlign: 'middle' }}>
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 17 22 12z"/>
                </svg>
              </Box>
              <a
                href="https://www.facebook.com/scwinternational"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                scwinternational
              </a>
            </Typography>
        </Paper>
      </Box>
    </Container>
  );
}