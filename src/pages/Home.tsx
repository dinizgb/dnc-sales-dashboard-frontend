import { AvatarsList, CardComponent, Header } from '@/components'

// MUI
import Container from '@mui/material/Container'

// UTILS
import { currencyConverter } from '@/utils'

const mockListData = [
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 1',
    subtitle: currencyConverter(1234.56),
  },
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 2',
    subtitle: currencyConverter(1014.26),
  },
  {
    avatar: '/dnc-avatar.jpg',
    name: 'Nome Sobrenome 3',
    subtitle: currencyConverter(934.56),
  },
]

function Home() {
  return (
    <>
      <Header />
      <br />
      <Container maxWidth="lg">
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
