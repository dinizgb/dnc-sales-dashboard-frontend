import {
  AvatarsList,
  CardComponent,
  CustomChart,
  CustomTable,
  Header,
} from '@/components'

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

const mockTableData = {
  headers: ['Name', 'Email', 'Actions'],
  rows: [
    [
      <span>John Doe</span>,
      <span>john@example.com</span>,
      <button>Delete</button>,
    ],
    [
      <span>Jane Smith</span>,
      <span>jane@example.com</span>,
      <button>Delete</button>,
    ],
    [
      <span>Sam Green</span>,
      <span>sam@example.com</span>,
      <button>Delete</button>,
    ],
  ],
}

function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <CardComponent>
          <AvatarsList listData={mockListData} />
        </CardComponent>
        <CardComponent>
          <CustomTable
            headers={mockTableData.headers}
            rows={mockTableData.rows}
          />
        </CardComponent>
        <CardComponent>
          <CustomChart
            labels={['Jan', 'Fev', 'Mar', 'Abr']}
            data={[1000.12, 2300.54, 943.32, 985.59]}
            type="line"
          />
        </CardComponent>
      </Container>
    </>
  )
}

export default Home
