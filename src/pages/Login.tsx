// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// COMPONENTS
import {
  BannerImage,
  FormComponent,
  Logo,
  StyledH1,
  StyledP,
} from '@/components'

// UTILS
import { pxToRem } from '@/utils'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}

function Login() {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ alignItems: 'center', display: 'flex', height: '100vh' }}
          >
            <Container maxWidth="sm">
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'email', placeholder: 'Email' },
                  { type: 'password', placeholder: 'Senha' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Login',
                  },
                ]}
                message={{
                  msg: 'Formulário enviado com sucesso!',
                  type: 'success',
                }}
              />
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

export default Login
