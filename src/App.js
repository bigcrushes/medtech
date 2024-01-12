import * as React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  
  return (
    <Router>
      <div className="App">
        <AppShell/>
        <body style={{minHeight:'100vh', display:'flex'}}>           
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
        </body> 
        <Footer/>
      </div> 
    </Router>
    
  )
}

function Footer() {
  return (
    <footer>
      <Box bgcolor={'#121A46'} padding={'20px'}>
      <div className="social-icons">
        <a href="https://t.me/NUSMedTech" target="_blank">
          <TelegramIcon sx={{ mr: 7 }}/>
        </a>
        <a href="https://www.instagram.com/nus.medtech/" target="_blank">
          <InstagramIcon/>
        </a>
        <a href="https://www.linkedin.com/company/nus-medtech/" target="_blank">
          <LinkedInIcon sx={{ ml: 7 }}/>
        </a>
      </div>
      </Box>
    </footer>
  );
}

function AppShell() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleHover = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#121A46' }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <img src="/medtech_logo.png" alt="image" height="50" width="50"/>
          </Link>
          <Typography sx={{ flexGrow: 1 }} variant="h6" component="div" onClick={handleHover}>
            <Link>
              Projects▾
            </Link>
          </Typography>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>
              <Link to="/physion">Physion</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/morphine">Morphine</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/connecto">Connecto</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/onetouch">One Touch</Link>
            </Typography>
            <Typography sx={{ p: 2 }}>
              <Link to="/heartsync">Heartsync</Link>
            </Typography>
          </Popover>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/archives">Archives</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/pubssubcomm">Pubs Subcomm</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/recruitment">Recruitment</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/merchandise">Merchandise</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/contact">Contact Us</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App
