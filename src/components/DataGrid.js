import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Card, Grid, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import SelectFieldsComponent from './SelectComponent';

const DataTable = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First name', width: 150 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        { field: 'age', headerName: 'Age', type: 'number', width: 110 },
        // Add more columns as needed
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        // Add more rows as needed
    ];

    return (
        <><Card>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6} lg={6}>
                    <Box sx={{ pl: 2 }}>
                        <h3 >
                            Product Sell   </h3>
                        <h5>
                            Product Name   </h5>
                    </Box>
                </Grid>
                <Grid xs={3} md={3} lg={3} sx={{ pt: 4 }}></Grid>
                    <Grid xs={2} md={2} lg={2} sx={{ pt: 4 }}>
                        <input type="search" id="form1" className="form-control" placeholder='Search..' />

                    </Grid>
                    <Grid xs={1} md={1} lg={1} sx={{pt:4,pl:1}}><SelectFieldsComponent /></Grid>
               

            </Grid>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 20]}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </Card>
        </>
    );
};

export default DataTable;
