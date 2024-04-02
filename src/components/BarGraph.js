import { Box, Card } from '@mui/material';
import React, { useState } from 'react';
// import './BarGraph.css';

const BarGraph = ({ data }) => {
    const [highlightedIndex, setHighlightedIndex] = useState(null);

    return (<>
        <Card>
            <Box sx={{ pl: 2 }} >
                <h5> Overview</h5>
            </Box>
            <div className="bar-graph" >

                {data.map((item, index) => (
                    <div
                        className={`bar ${highlightedIndex === index ? 'highlighted' : ''}`}
                        style={{ height: `${item}px` }}
                        key={index}
                        onMouseEnter={() => setHighlightedIndex(index)}
                        onMouseLeave={() => setHighlightedIndex(null)}
                    ></div>
                ))}
            </div>
        </Card>
    </>
    );
};

export default BarGraph;
