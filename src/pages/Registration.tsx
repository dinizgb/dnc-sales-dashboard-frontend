import styled from 'styled-components'

const RegistrationArea = styled.div`
  background: #666;
`

const RegistrationImage = styled.div`
  background-image: url(/login-image.svg);
  height: 100vh;
  width: 50vw;
`

function Registration() {
  return (
    <>
      <RegistrationArea>Cadastro</RegistrationArea>
      <RegistrationImage />
    </>
  )
}

export default Registration
