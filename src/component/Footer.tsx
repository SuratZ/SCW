import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
    <Box
        component="footer"
        sx={{
            width: '100%',
            px: 1,
            py: 2,
            bgcolor: '#222',
            color: '#fff',
            textAlign: 'center',
            position: 'fixed',
            left: 0,
            bottom: 0,
            zIndex: 100,
            fontSize: { xs: '0.9rem', sm: '1rem' },
        }}
    >
        <Typography
            variant="body2"
            sx={{
                display: 'inline-block',
                maxWidth: '100vw',
                wordBreak: 'break-word',
            }}
        >
            © {new Date().getFullYear()} SCW Certification. All rights reserved.
        </Typography>
    </Box>
);

export default Footer;