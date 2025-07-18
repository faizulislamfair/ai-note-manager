import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
  const navigate = useNavigate();

  
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontSize: '8rem', fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h4" color="text.primary" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Oops! The page you are looking for might have been removed or doesn't exist.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/')}
          sx={{ 
            borderRadius: 2,
            px: 4,
            py: 1,
            textTransform: 'none',
            fontSize: '1.1rem'
          }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}

