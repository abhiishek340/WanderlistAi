import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  styled,
  Box,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  boxShadow: 'none',
  position: 'absolute',
  '& .MuiToolbar-root': {
    padding: theme.spacing(2, 0),
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  '& svg': {
    marginRight: theme.spacing(1),
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(2),
  borderRadius: 20,
  padding: theme.spacing(1, 2),
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

function Navbar() {
  return (
    <StyledAppBar>
      <Container maxWidth="lg">
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StyledTitle variant="h5" component={Link} to="/">
              <FlightTakeoffIcon />
              Travel Planner
            </StyledTitle>
          </motion.div>
          
          <Box component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavButton 
              component={Link} 
              to="/search"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Search
            </NavButton>
            <NavButton 
              component={Link} 
              to="/itinerary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              My Trips
            </NavButton>
            <NavButton 
              component={Link} 
              to="/profile"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Profile
            </NavButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

export default Navbar; 