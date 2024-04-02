import React, { useState } from 'react'
import { Grid, Box } from '@mui/material';
import DashboardContenet from './DashboardContenet';
import Sidebar from './Sidebar';
import { Icon } from '@iconify/react';


const Structure = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={2}>

                    <Box sx={{ p: 2 }}>
                        <Icon icon="simple-icons:clickhouse" onClick={toggleSidebar} style={{ color: '#000', fontSize: '24px' }} />
                    </Box>

                    <Sidebar isOpen={isOpen} toggle={toggleSidebar} />

                </Grid>
                <Grid item xs={10}>
                    <DashboardContenet />
                </Grid>

            </Grid>
        </div>
    )
}

export default Structure
