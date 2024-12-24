import React from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  styled,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ExploreIcon from '@mui/icons-material/Explore';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HotelIcon from '@mui/icons-material/Hotel';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Import your local images
import heroImage from '../assets/images/ktm.webp';
import discoverImage from '../assets/images/Discover.webp';
import planImage from '../assets/images/Plan.webp';
import hotelImage from '../assets/images/Hotels.webp';

const HeroSection = styled('div')(({ theme }) => ({
  height: '100vh',
  background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(transparent, #fff)',
  },
}));

const HeroContent = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const StyledCard = styled(motion(Card))(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
    '& .MuiCardMedia-root': {
      transform: 'scale(1.1)',
    },
  },
  '& .MuiCardMedia-root': {
    transition: 'transform 0.3s ease-in-out',
  },
}));

const LocationBadge = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: theme.spacing(0.5, 1.5),
  borderRadius: 20,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  boxShadow: theme.shadows[2],
}));

const AnimatedButton = styled(motion(Button))(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  borderRadius: 30,
  fontSize: '1.1rem',
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  '&:hover': {
    background: `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
  },
}));

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const features = [
    {
      title: 'Discover Places',
      description: 'Explore breathtaking destinations and hidden gems around the world.',
      image: discoverImage,
      icon: <ExploreIcon fontSize="large" />,
      location: 'Worldwide',
    },
    {
      title: 'Plan Your Journey',
      description: 'Create personalized itineraries with our smart planning tools.',
      image: planImage,
      icon: <FlightTakeoffIcon fontSize="large" />,
      location: 'Your Next Adventure',
    },
    {
      title: 'Luxury Stays',
      description: 'Find and book exceptional accommodations for unforgettable experiences.',
      image: hotelImage,
      icon: <HotelIcon fontSize="large" />,
      location: 'Premium Hotels',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Box>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <Typography 
            variant="h1" 
            component={motion.h1}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            sx={{ 
              fontSize: { xs: '2.5rem', md: '4.5rem' },
              fontWeight: 900,
              marginBottom: 2,
              background: 'linear-gradient(45deg, #fff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Journey Begins Here
          </Typography>
          <Typography 
            variant="h5" 
            paragraph
            component={motion.p}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Discover amazing destinations and create unforgettable memories with our personalized travel planning
          </Typography>
          <AnimatedButton
            component={Link}
            to="/search"
            variant="contained"
            size="large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Adventure
          </AnimatedButton>
        </HeroContent>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom
            sx={{ 
              fontWeight: 800,
              marginBottom: 8,
              color: theme.palette.text.primary,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
              },
            }}
          >
            Experience the Difference
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={feature.title} xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants}>
                  <StyledCard>
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        height="280"
                        image={feature.image}
                        alt={feature.title}
                      />
                      <LocationBadge>
                        <LocationOnIcon sx={{ fontSize: 16 }} />
                        <Typography variant="caption" sx={{ fontWeight: 600 }}>
                          {feature.location}
                        </Typography>
                      </LocationBadge>
                    </Box>
                    <CardContent sx={{ textAlign: 'center', position: 'relative' }}>
                      <Box 
                        sx={{ 
                          marginBottom: 2,
                          color: 'primary.main',
                          transform: 'translateY(-50%)',
                          backgroundColor: 'white',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '-30px auto 20px',
                          boxShadow: theme.shadows[2],
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                        sx={{ fontWeight: 700 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Home; 