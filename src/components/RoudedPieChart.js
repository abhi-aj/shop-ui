import { Box, Card } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {

    const series = [44, 55, 41, 17, 15];
    const options = {
        chart: {
            type: 'pie',
            width: '100%',
            height: '350px',
        },
        labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    };

    return (
        <>
            <Card sx={{p:2}}>
                <Box sx={{ pb: 3, pl: 2 }}>
                    <h5> Customers <br />Customers that bye product</h5>

                </Box>

                <div>
                    <Chart options={options} series={series} type="pie" width="100%" height="350px" />
                </div>
            </Card>
        </>

    );
};

export default PieChart;
