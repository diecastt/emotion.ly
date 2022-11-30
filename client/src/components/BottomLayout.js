import React from 'react'
import { Fade } from 'react-reveal'
import Genres from './Genres'
import { Box, Container, Stack, Button} from '@mui/material';
import { minWidth } from '@mui/system';

const BottomLayout = () => {
  return (
    <Fade bottom>
        <Container maxWidth="md">        
                <Stack
                  sx={{ pt: 4 }}
                  direction="column"
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                    <Genres/>
                    <Button variant="contained" style = {{background: '#934c2e'}}>Talk to Me</Button>
                </Stack>
              </Container>
    </Fade>
  )
}

export default BottomLayout