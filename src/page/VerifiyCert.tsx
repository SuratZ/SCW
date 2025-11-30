import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Container,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
  const [open, setOpen] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    // Validate required fields
    if (query === null || query.trim() === "") {
      setError("Input required.");
      setOpen(true);
      return;
    }
    setOpen(false);
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
      setOpen(true);
      setError("No matching certificate found.");
    }
    setLoading(false);
  };

  useEffect(() => {
    // fetch(GOOGLE_SHEET_API_URL)
    //   .then((res) => res.json())
    //   .then((rows) => {
    //     const filterData = rows.filter(
    //       (row: SheetData) =>
    //         row.serialNoEng || row.serialNoThai || row.customerName
    //     );
    //     setData(filterData);
    //   });
  }, []);

  const onClickView = (companyName: string) => {
    setResult(data.find((row) => row.customerName === companyName) || null);
    setOpenModal(true);
  };

  const columns: GridColDef[] = [
    {
      field: "customerName",
      headerName: "Company Name",
      width: 350,
      disableColumnMenu: true,
    },
    {
      field: "serialNoThai",
      headerName: "Certificate No.",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "sysOfCert",
      headerName: "Standard",
      width: 150,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "expiredDate",
      headerName: "Expiry Date",
      width: 150,
      sortable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 60,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "",
      headerName: "Action",
      width: 80,
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

  // const rows = data.map((row, index) => ({
  //   ...row,
  //   id: index + 1,
  // }));

  // const paginationModel = { page: 0, pageSize: 5 };

  return (
    <>
      <Container
        sx={{
          justifyContent: "row",
          display: ["", "flex"],
          pt: 4,
          gap: [0, 4],
        }}
      >
        <Container
          component="form"
          onSubmit={handleSearch}
          sx={{
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              textAlign: "center",
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
              }}
            >
              VERIFY CERTIFICATE
            </Typography>
          </Container>
          <Container
            sx={{
              display: ["", "flex"],
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              my: 2,
            }}
          >
            <Box>
              <Autocomplete
                sx={{ width: ["auto", "50vh", "50vh"] }}
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
            <Box
              sx={{
                pt: [2, 0],
                justifyContent: ["center", ""],
                display: ["flex", ""],
              }}
            >
              <Button
                variant="contained"
                type="submit"
                disabled={loading}
                sx={{
                  height: "50px",
                  width: ["100vh", "10vh"],
                }}
              >
                View
              </Button>
            </Box>
          </Container>
          <Collapse in={open}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Centers horizontally
                alignItems: "center", // Centers vertically (if height allows)
              }}
            >
              <Alert
                severity="warning"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2, width: ["100%", "50%"] }}
              >
                {error}
              </Alert>
            </Box>
          </Collapse>
        </Container>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        {/* <Paper sx={{ height: ["45vh","40vh"], width: ["90%", "90%",'auto'] }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
          />
        </Paper> */}
      </Container>

      {openModal && result && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          className="modal-overlay"
        >
          <Card className="modal-content">
            <CardContent sx={{                  
                  maxHeight: "80vh",
                  overflow: "scroll",}}>
              <Box sx={{ position: "absolute", top: 20, right: 20 }}>
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
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
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                      >
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
