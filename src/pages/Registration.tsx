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
  StyledUl,
} from '@/components'

// UTILS
import { pxToRem } from '@/utils'

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
}

function Registration() {
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
                <StyledH1>Faça seu cadastro</StyledH1>
                <StyledP>Primeiro, diga-nos quem você é.</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: 'text', placeholder: 'Nome completo' },
                  { disabled: true, type: 'email', placeholder: 'Email' },
                  { type: 'tel', placeholder: 'Telefone' },
                ]}
                buttons={[
                  {
                    className: 'primary',
                    disabled: true,
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Próximo',
                  },
                ]}
                message={{
                  msg: 'Formulário enviado com sucesso!',
                  type: 'error',
                }}
              />

              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Box sx={{ marginBottom: pxToRem(24) }}>
                  <Logo height={41} width={100} />
                </Box>
                <StyledH1>Defina sua senha</StyledH1>
                <StyledP>Sua senha deve ter:</StyledP>
                <StyledUl>
                  <li>Entre 8 e 16 caracteres;</li>
                  <li>Pelo menos uma letra maiúscula;</li>
                  <li>Pelo menos um caractere especial.</li>
                </StyledUl>
              </Box>
              <FormComponent
                inputs={[{ type: 'password', placeholder: 'Digite sua senha' }]}
                buttons={[
                  {
                    className: 'primary',
                    type: 'submit',
                    onClick: handleSubmit,
                    children: 'Enviar',
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

export default Registration
