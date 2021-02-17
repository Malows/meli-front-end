import Layout from '../components/layout/Layout'
import { SearchProvider } from '../context'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: any): JSX.Element { // eslint-disable-line
    return (
        <SearchProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SearchProvider>
    )
}

export default MyApp
