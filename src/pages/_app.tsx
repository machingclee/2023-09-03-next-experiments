import { Container } from '@mui/material'
import { AppProps } from 'next/app'
import TopNavBar from '../components/TopNavBar'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container style={{ marginTop: 20 }}>
      <div>
        <div>
          <TopNavBar />
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
    </Container>
  )
}