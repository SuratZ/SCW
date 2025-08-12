import { Box, Button, Container, FormControl, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Form } from 'react-router';

type SheetData = {
    code: string;
    name: string;
    [key: string]: string;
};

const GOOGLE_SHEET_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY';

const VerifiyCert: React.FC = () => {
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [results, setResults] = useState<SheetData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResults([]);

        try {
            const res = await fetch(GOOGLE_SHEET_API_URL);
            const data = await res.json();

            // Assuming first row is header
            const [header, ...rows] = data.values;
            const filtered = rows
                .map((row: string[]) =>
                    header.reduce((obj: any, key: string, idx: number) => {
                        obj[key.toLowerCase()] = row[idx] || '';
                        return obj;
                    }, {})
                )
                .filter(
                    (row: SheetData) =>
                        row.code?.toLowerCase() === code.toLowerCase() &&
                        row.name?.toLowerCase() === name.toLowerCase()
                );

            setResults(filtered);
        } catch (err) {
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container sx={{
            textAlign: 'center',
            mt: 4
        }}>
            <Box sx={{
                p: 2,
                width: '100vw',
                height: '75vh',
                position: 'relative',
                left: '50%',
                right: '50%',
                ml: '-50vw',
                mr: '-50vw',
                boxShadow: 1
            }}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <form onSubmit={handleSearch}>
                        <div>
                            <Typography variant="h6">Verify Certificate</Typography>
                        </div>
                        <div>
                            <TextField
                                required
                                id="certificate-no"
                                label="Certificate No"
                                value={code}
                                onChange={e => setCode(e.target.value)}
                                name="certificateNo"
                            />
                            <TextField
                                required
                                id="company-name"
                                label="Company Name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                name="companyName"
                            />
                        </div>
                        <div>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Searching...' : 'Search'}
                            </Button>
                        </div>
                        {error && (
                            <Typography color="error" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                    </form>
                </Box>
            </Box>

        </Container>

    );
};

export default VerifiyCert;