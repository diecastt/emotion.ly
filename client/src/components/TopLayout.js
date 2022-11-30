import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Fade, Slide} from 'react-reveal';


export const TopLayout = () => {
  

  return (
    <Box
          sx={{
            bgcolor: '#f8ecde',
            pt: 8,
            pb: 6,
          }}
        >
          <Slide bottom>
              <Container maxWidth="md">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                  gutterBottom
                >
                  An Emotional Playlist
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" style = {{marginBottom: 12}}>
                  Talk to me! Tell me how you feel! Tell me about your day, what you're proud about, your aspirations. 
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary">
                  I'll convert these feelings into a musical playlist fitting your mood!            
                </Typography>
                
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button variant="contained" style = {{background: '#934c2e'}}>Talk to Me</Button>
                </Stack>
              </Container>
          </Slide>
          
        </Box>

  )
}
export default TopLayout