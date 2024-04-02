import { Grid, Typography } from '@mui/material';
import React from 'react';
// import './Sidebar.css';
import { Icon } from '@iconify/react';

const Sidebar = ({ isOpen, toggle }) => {
  return (<>
    <div className={`sidebar ${isOpen ? ' ' : 'open'}`}>
      <button className="close-btn" onClick={toggle}>Close</button>

      <Grid sx={{
        pl: "10px",
        pr: "10px",
        color: "white"
      }}>

        <h3> <Icon icon="gg:shape-hexagon" style={{ color: 'white', fontSize: '14px' }} />
       <span sx={{pb:2}}>Dashboard </span>     </h3></Grid>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  </>
  );
};

export default Sidebar;
