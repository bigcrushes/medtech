import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, withRouter } from 'react-router-dom'
import Home from './home';
import Physion from './projects/Physion';
import Morphine from './projects/Morphine';
import Connecto from './projects/Connecto';
import OneTouch from './projects/OneTouch';
import Heartsync from './projects/Heartsync';
import Archives from './pages/Archives';
import PubsSubcomm from './pages/PubsSubcomm';
import Recruitment from './pages/Recruitment';
import Merchandise from './pages/Merchandise';
import Contact from './pages/Contact';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function App() {
  
  return (
    <Router>
      <div className="App">
        <AppShell/>            
        <Routes>
          <Route exact path="/" element={<Home/>}  />
          <Route exact path="/physion" element={<Physion/>}  />
          <Route exact path="/morphine" element={<Morphine/>}  />
          <Route exact path="/connecto" element={<Connecto/>}  />
          <Route exact path="/onetouch" element={<OneTouch/>}  />
          <Route exact path="/heartsync" element={<Heartsync/>}  />
          <Route exact path="/archives" element={<Archives/>}  />
          <Route exact path="/pubssubcomm" element={<PubsSubcomm/>}  />
          <Route exact path="/recruitment" element={<Recruitment/>}  />
          <Route exact path="/merchandise" element={<Merchandise/>}  />
          <Route exact path="/contact" element={<Contact/>}  />
        </Routes>
      </div> 
    </Router>
    
  )
}

function AppShell() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src="/medtech_logo.png" alt="image" height="50" width="50"/>
            <Box sx={{ flexGrow: 1 }} aria-describedby={id} variant="contained" onClick={handleClick}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Projects
              </Typography>
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
              }}
            >
        <Typography sx={{ p: 2 }}>
          <Link to="/physion" style={{ textDecoration: 'none' }}>Physion</Link>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <Link to="/morphine" style={{ textDecoration: 'none' }}>Morphine</Link>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <Link to="/connecto" style={{ textDecoration: 'none' }}>Connecto</Link>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <Link to="/onetouch" style={{ textDecoration: 'none' }}>One Touch</Link>
        </Typography>
        <Typography sx={{ p: 2 }}>
          <Link to="/heartsync" style={{ textDecoration: 'none' }}>Heartsync</Link>
        </Typography>
      </Popover>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/archives" style={{ textDecoration: 'none' }}>Archives</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/pubssubcomm" style={{ textDecoration: 'none' }}>Pubs Subcomm</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/recruitment" style={{ textDecoration: 'none' }}>Recruitment</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/merchandise" style={{ textDecoration: 'none' }}>Merchandise</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact Us</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App