import React from 'react'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


const Header = ({ onToggle }) => {
  return (
    <AppBar position="relative" style = {{ background: '#934c2e'}}>
        <Toolbar>
          <Typography variant="h5" style = {{color: "#000011", fontFamily: "sans-serif", fontWeight: 600, marginLeft: 30}}>
            Emotion.ly
          </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header