import styled from 'styled-components'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// COMPONENTS
import { BannerImage } from '@/components'

const RegistrationArea = styled.div`
  background: #666;
`

function Registration() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Container maxWidth="sm">
              <RegistrationArea>Cadastro</RegistrationArea>
            </Container>
          </Grid>
          <Grid item sm={6} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Registration
