import React, { useState } from 'react';
import axios from 'axios';
import { 
  Container, 
  TextField, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  Typography,
  styled
} from '@mui/material';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

function Search() {
  const [destination, setDestination] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/places/search?query=${destination}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching destinations:', error);
    }
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Where do you want to go?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSearch}
            sx={{ marginTop: 2 }}
          >
            Search
          </Button>
        </Grid>
        
        {results.map((place) => (
          <Grid item xs={12} md={4} key={place.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{place.name}</Typography>
                <Typography color="text.secondary">{place.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default Search; 