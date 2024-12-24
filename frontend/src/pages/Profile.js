import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Grid,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginBottom: theme.spacing(2),
  },
  section: {
    marginTop: theme.spacing(4),
  },
}));

function Profile() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4} align="center">
            <Avatar
              className={classes.avatar}
              src="https://source.unsplash.com/200x200/?person"
            />
            <Typography variant="h5">John Doe</Typography>
            <Typography color="textSecondary">Travel Enthusiast</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h6">About Me</Typography>
            <Typography paragraph>
              Passionate traveler with a love for exploring new cultures and destinations.
              Always planning the next adventure!
            </Typography>
            
            <div className={classes.section}>
              <Typography variant="h6">Travel Stats</Typography>
              <Typography>Countries Visited: 12</Typography>
              <Typography>Trips Planned: 8</Typography>
              <Typography>Reviews Written: 24</Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Profile; 