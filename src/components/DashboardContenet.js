import { Grid, Typography } from '@mui/material'
import React from 'react'
import CardInfo from './CardInfo'
import BarGraph from './BarGraph';
import RoundedApexChart from './RoudedPieChart';
import RoundedPieChart from './RoudedPieChart';
import PieChart from './RoudedPieChart';
// import RoundedPieChart from './RoudedPieChart';

import { Icon } from '@iconify/react';
import DataTable from './DataGrid';

const DashboardContenet = () => {
    const data = [100, 150, 200, 250, 180, 247, 47, 200, 200, 50];

    return (
        <div>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={4}>
                    <Typography>
                        Hello Fitpeo   <Icon icon="icon-park-outline:hi" style={{ color: '#000', fontSize: '14px' }} />, </Typography>
                </Grid>
                <Grid item xs={6}>


                </Grid>
                <Grid item xs={2}>

                    <div >                     
                            <input type="search" id="form1" className="form-control" placeholder='Search..' />
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={3}>
                    <CardInfo />  </Grid>
                <Grid item xs={3}>
                    <CardInfo />

                </Grid>
                <Grid item xs={3}>
                    <CardInfo />

                </Grid>
                <Grid item xs={3}>

                    <CardInfo />
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ p: 4 }}>
                <Grid item xs={8}>
                    <BarGraph data={data} />
                </Grid>
                <Grid item xs={4}>

                    <PieChart />
                </Grid>
                <Grid item xs={12}>
                    <DataTable />
                </Grid>

            </Grid>
        </div>
    )
}

export default DashboardContenet
