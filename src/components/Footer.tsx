import React from 'react';

const Footer: React.FC = () => (
    <>
        <footer style={{
            width: '100%',
            padding: '1rem 0',
            background: '#222',
            color: '#fff',
            textAlign: 'center',
            position: 'fixed',
            left: 0,
            bottom: 0,
            zIndex: 100,
        }}>
            © {new Date().getFullYear()} SCW Certification. All rights reserved.
        </footer>
        <div style={{ height: '56px' }} />
    </>
);

export default Footer;