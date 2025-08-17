import { Autocomplete, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

type SheetData = {
    ISIC_Code: string;
    address: string;
    customerName: string;
    expiredDate: string;
    initialRegistrationDate: string;
    issuanceDate: string;
    orderNo: string;
    projectNo: string;
    scopeOfCert: string;
    serialNoEng: string;
    serialNoThai: string;
    status: string;
    sysOfCert: string;
    [key: string]: string;
};

// const GOOGLE_SHEET_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY';
const sheetId = '1O6uJI7KtabX3XVPrlwT8_GTe1OaM_Ldm22RkMiq-c_g'; // replace with your Google Sheet ID
const GOOGLE_SHEET_API_URL =
    `https://opensheet.elk.sh/${sheetId}/Sheet1`; // change to your ID

const VerifiyCert: React.FC = () => {
    const [query, setQuery] = useState<string | null>('');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<SheetData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState<SheetData[]>([]);


    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setResult(null);

        // Validate required fields
        if (query === null || query.trim() === '') {
            setError('Input required.');
            return;
        }

        setLoading(true);

        const found = data.find(
            (row) =>
            (
                row.serialNoEng?.trim().toLowerCase().includes(query.toLowerCase()) ||
                row.serialNoThai?.trim().toLowerCase().includes(query.toLowerCase()) ||
                row.customerName?.toLowerCase().includes(query.toLowerCase())
            )
        );
        setResult(found || null);

        setLoading(false);

    };

    useEffect(() => {
        fetch(GOOGLE_SHEET_API_URL)
            .then((res) => res.json())
            .then((rows) => {
                const filterData = rows.filter((row: SheetData) => row.serialNoEng || row.serialNoThai || row.customerName);
                setData(filterData)
            });
    }, []);

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
                    <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }} >
                        Verify Certificate
                    </Typography>
                    <Box
                        component="form"
                        sx={{ '& .MuiTextField-root': { m: 1, width: '35ch' } }}
                        noValidate
                        onSubmit={handleSearch}
                    >
                        <Autocomplete
                            freeSolo
                            value={query}
                            onChange={(_, newValue: string | null) => {
                                setQuery(newValue);
                            }}
                            inputValue={inputValue}
                            onInputChange={(_, newInputValue) => {
                                setInputValue(newInputValue);
                                setQuery(newInputValue);
                            }}
                            id="controllable-states"
                            options={
                                // Only show unique customer names in dropdown
                                Array.from(
                                    new Set(
                                        data
                                            .map((row) => row.customerName)
                                            .filter(Boolean)
                                    )
                                )
                            }
                            filterOptions={(options, state) => {
                                // Show suggestions if input matches customerName or certNo
                                const input = state.inputValue.trim().toLowerCase();
                                if (!input) return options;
                                // Find rows matching either customerName or certNo
                                const matchedRows = data.filter(
                                    (row) =>
                                        row.customerName?.toLowerCase().includes(input) ||
                                        row.serialNoEng?.toLowerCase().includes(input) ||
                                        row.serialNoThai?.toLowerCase().includes(input)
                                );
                                // Return unique customer names from matched rows
                                return Array.from(
                                    new Set(
                                        matchedRows
                                            .map((row) => row.customerName)
                                            .filter(Boolean)
                                    )
                                );
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Certificate No or Customer Name"
                                    placeholder="Enter certificate no or customer name"
                                />
                            )}
                        />
                        <Button
                            variant="contained"
                            type='submit'
                            disabled={loading}
                            sx={{
                                mt: 2,
                                mb: 2,
                                minWidth: 120,
                                minHeight: 40,
                                pt: 0.5,
                                pl: 2,
                                pr: 2,
                                pb: 0,
                                textTransform: 'none',
                            }}
                        >
                            Search
                        </Button>
                        {error && (
                            <Typography color="error" sx={{ mt: 2 }}>
                                {error}
                            </Typography>
                        )}
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    background: 'linear-gradient(to bottom, #ffffff 0%, #e3f2fd 100%)',
                    display: "flex",
                    minHeight: "55vh"
                }}
            >
                <Container
                    sx={{
                        textAlign: 'center',
                        pb: 10
                    }}
                >
                    {result && (
                        <Container sx={{ mt: 2, border: '1px solid #ccc', padding: '16px', borderRadius: '8px', backgroundColor: '#ffffff' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mb: 2,
                                    alignItems: { sm: 'flex-end' },
                                }}
                            >
                                <TextField
                                    label="Company Name"
                                    value={result.customerName}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '60ch' },
                                    }}
                                />
                                <TextField
                                    label="Certificate No."
                                    value={`${result.serialNoEng || result.serialNoThai}`}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '12ch' },
                                    }}
                                />
                                <TextField
                                    label="Standard"
                                    value={result.sysOfCert}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '15ch' },
                                    }}
                                />
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 2,
                                    mb: 2,
                                }}
                            >
                                <TextField
                                    label="Scope"
                                    value={result.scopeOfCert}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        width: '100%',
                                    }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: { xs: 'column', sm: 'row' },
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    mb: 2,
                                    alignItems: { sm: 'flex-end' },
                                }}
                            >
                                <TextField
                                    label="Initial Registration Date"
                                    value={result.initialRegistrationDate}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '20ch' },
                                    }}
                                />
                                <TextField
                                    label="Issued Date"
                                    value={result.issuanceDate}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '22ch' },
                                    }}
                                />
                                <TextField
                                    label="Expiry Date"
                                    value={result.expiredDate}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                            readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: { xs: 2, sm: 0 },
                                        mr: { xs: 0, sm: 2 },
                                        width: { xs: '100%', sm: '20ch' },
                                    }}
                                />
                            </Box>
                            <Box sx={{ backgroundColor: result.status === 'Active' ? '#d4edda' : '#f8d7da', padding: '8px', borderRadius: '4px' }}>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                    Status: {result.status}
                                </Typography>
                            </Box>
                        </Container>
                    )}
                </Container>
            </Box>
        </>

    );
};

export default VerifiyCert;