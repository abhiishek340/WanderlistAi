import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Itinerary() {
  const classes = useStyles();

  const trips = [
    {
      id: 1,
      destination: 'Paris, France',
      dates: 'Mar 15 - Mar 22, 2024',
      status: 'Upcoming',
    },
    {
      id: 2,
      destination: 'Tokyo, Japan',
      dates: 'Jun 10 - Jun 20, 2024',
      status: 'Planning',
    },
    {
      id: 3,
      destination: 'New York, USA',
      dates: 'Jan 5 - Jan 10, 2024',
      status: 'Completed',
    },
  ];

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" gutterBottom>
        My Trips
      </Typography>
      
      <Grid container spacing={4}>
        {trips.map((trip) => (
          <Grid item key={trip.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h5" component="h2">
                  {trip.destination}
                </Typography>
                <Typography color="textSecondary">
                  {trip.dates}
                </Typography>
                <Typography color="primary">
                  {trip.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="primary">
                  Edit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Itinerary; 