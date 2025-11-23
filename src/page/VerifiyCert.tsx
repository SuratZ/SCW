import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import "./style.css";
import "../component/modal.css";

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

const sheetId = "1O6uJI7KtabX3XVPrlwT8_GTe1OaM_Ldm22RkMiq-c_g"; // replace with your Google Sheet ID
const GOOGLE_SHEET_API_URL = `https://opensheet.elk.sh/${sheetId}/1`; // change to index of your sheet.

const VerifiyCert: React.FC = () => {
  const [query, setQuery] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<SheetData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<SheetData[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    // Validate required fields
    if (query === null || query.trim() === "") {
      setError("Input required.");
      return;
    }

    setLoading(true);

    const found = data.find(
      (row) =>
        row.serialNoEng?.trim().toLowerCase().includes(query.toLowerCase()) ||
        row.serialNoThai?.trim().toLowerCase().includes(query.toLowerCase()) ||
        row.customerName?.toLowerCase().includes(query.toLowerCase())
    );
    setResult(found || null);
    if (found) {
      setOpenModal(true);
    } else {
      setError("No matching certificate found.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetch(GOOGLE_SHEET_API_URL)
      .then((res) => res.json())
      .then((rows) => {
        const filterData = rows.filter(
          (row: SheetData) =>
            row.serialNoEng || row.serialNoThai || row.customerName
        );
        setData(filterData);
      });
  }, []);

  const onClickView = (companyName: string) => {
    setResult(data.find((row) => row.customerName === companyName) || null);
    setOpenModal(true);
  };

  const columns: GridColDef[] = [
    {
      field: "customerName",
      headerName: "Company Name",
      width: 400,
      disableColumnMenu: true,
    },
    {
      field: "serialNoThai",
      headerName: "Certificate No.",
      width: 150,
      disableColumnMenu: true,
    },
    {
      field: "sysOfCert",
      headerName: "Standard",
      width: 150,
      disableColumnMenu: true,
    },
    { field: "expiredDate", headerName: "Expiry Date", width: 150 },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      disableColumnMenu: true,
    },
    {
      field: "",
      headerName: "Action",
      width: 100,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={onClickView.bind(null, params.row.customerName)}
        >
          View
        </Button>
      ),
    },
  ];

  const rows = data.map((row, index) => ({
    ...row,
    id: index + 1,
  }));

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Container
        sx={{
        //   backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center", // vertical centering
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            textAlign: "center",
            mt: 4,
          }}
        >
          <Typography
            className="navy-text"
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontFamily: "Roboto",
              fontSize: 24,
              pt: 2,
              pb: 2,
            }}
          >
            VERIFY CERTIFICATE
          </Typography>
          <Container
            component="form"
            sx={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                pb: 4,
                gap: 2  }}
            noValidate
            onSubmit={handleSearch}
          >
            {error && (
              <Typography color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}
            <Box>
                <Autocomplete
                    sx={{ width: 400 }}
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
                        new Set(data.map((row) => row.customerName).filter(Boolean))
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
                            matchedRows.map((row) => row.customerName).filter(Boolean)
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
            </Box>
            <Box>
                <Button
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                    height: '50px',
                }}
                >
                Search
                </Button>
            </Box>
          </Container>
        </Container>
      </Container>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Paper sx={{ height: 400, width: '90%'}}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </Container>

      {openModal && result && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          className="modal-overlay"
        >
          <Card className="modal-content">
            <CardContent>
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
                {result.customerName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {result.scopeOfCert}
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  minHeight: "55vh",
                }}
              >
                  {result && (
                    <Container
                      sx={{
                        mt: 2,
                        border: "1px solid #ccc",
                        padding: "16px",
                        borderRadius: "8px",
                        backgroundColor: "#ffffff",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          flexWrap: "wrap",
                          gap: 2,
                          mb: 2,
                          alignItems: { sm: "flex-end" },
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
                            width: { xs: "100%", sm: "60ch" },
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
                            width: { xs: "100%", sm: "12ch" },
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
                            width: { xs: "100%", sm: "15ch" },
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
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
                            width: "100%",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", sm: "row" },
                          flexWrap: "wrap",
                          gap: 2,
                          mb: 2,
                          alignItems: { sm: "flex-end" },
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
                            width: { xs: "100%", sm: "20ch" },
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
                            width: { xs: "100%", sm: "22ch" },
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
                            width: { xs: "100%", sm: "20ch" },
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          backgroundColor:
                            result.status === "Active" ? "#d4edda" : "#f8d7da",
                          padding: "8px",
                          borderRadius: "4px",
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: "bold", textAlign: "center" }}>
                          Status: {result.status}
                        </Typography>
                      </Box>
                    </Container>
                  )}
              </Container>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
};

export default VerifiyCert;
