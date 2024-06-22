import { CardComponent, Header } from '@/components'

// MUI
import Container from '@mui/material/Container'

function Home() {
  return (
    <>
      <Header />
      <br />
      <Container maxWidth="lg">
        <CardComponent>AAA</CardComponent>
      </Container>
    </>
  )
}

export default Home
