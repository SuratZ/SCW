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
        try {
            const found = data.find(
                (row) =>
                    (
                        row.serialNoEng?.trim().toLowerCase().includes(query.toLowerCase()) ||
                        row.serialNoThai?.trim().toLowerCase().includes(query.toLowerCase()) ||
                        row.customerName?.toLowerCase().includes(query.toLowerCase())
                    )
            );
            setResult(found || null);

            // Assuming first row is header
            // const [header, ...rows] = data.values;
            // const filtered = rows
            //     .map((row: string[]) =>
            //         header.reduce((obj: any, key: string, idx: number) => {
            //             obj[key.toLowerCase()] = row[idx] || '';
            //             return obj;
            //         }, {})
            //     )
            //     .filter(
            //         (row: SheetData) =>
            //             row.code?.toLowerCase() === code.toLowerCase() &&
            //             row.name?.toLowerCase() === name.toLowerCase()
            //     );

            // setResult(filtered);
        } catch (error) {
            setError('Failed to fetch data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
            fetch(GOOGLE_SHEET_API_URL)
                .then((res) => res.json())
                .then((rows) => {
                    const filterData = rows.filter((row: SheetData) => row.serialNoEng || row.serialNoThai || row.customerName);
                    setData(filterData)});
    }, []);

    // useEffect(() => {
    //     if (data) {
    //         // Process the data if needed
    //         setData(filterData);
    //     }
    // }, [data]);

    return (
        <Container sx={{
            textAlign: 'center',
            mt: 4
        }}>
            <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2}} >
                                Verify Certificate
            </Typography>
            <Box sx={{
                width: '100vw',
                minHeight: '70vh',
                position: 'relative',
                left: '50%',
                right: '50%',
                ml: '-50vw',
                mr: '-50vw',
                boxShadow: 1
            }}>
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '40ch' } }}
                    noValidate
                    onSubmit={handleSearch}
                >
                    <Autocomplete
                        freeSolo
                        value={query}
                        onChange={(event: any, newValue: string | null) => {
                            setQuery(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
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
                <Box sx={{ mt: 2 }}>
                    {result && (
                        <div className="mt-5 border p-3 rounded bg-gray-50">
                            <Box>
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
                                        mb: 2, mr: 2, width: '35ch'
                                    }}
                                />
                                <TextField
                                label="Certificate No."
                                value={result.serialNoEng || result.serialNoThai}
                                variant="standard"
                                slotProps={{
                                    input: {
                                    readOnly: true,
                                    },
                                }}
                                
                                sx={{
                                    mb: 2, mr: 2, width: '10ch'
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
                                        mb: 2, mr: 2, width: '15ch'
                                    }}
                                />
                            </Box>
                            
                            <Box>

                            </Box>
                            <Box>
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
                                        mb: 2, mr: 2, width: '65ch'
                                    }}
                                />
                            </Box>
                            <Box>
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
                                        mb: 2, mr: 2, width: '20ch'
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
                                        mb: 2, mr: 2, width: '22ch'
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
                                        mb: 2, mr: 2, width: '20ch'
                                    }}
                                />
                            </Box>
                            <Box>
                                <TextField
                                    label="Status"
                                    value={result.status}
                                    variant="standard"
                                    slotProps={{
                                        input: {
                                        readOnly: true,
                                        },
                                    }}
                                    sx={{
                                        mb: 2, mr: 2, width: '30ch'
                                    }}
                                />
                            </Box>
                        </div>
                    )}
                </Box>
            </Box>

        </Container>

    );
};

export default VerifiyCert;