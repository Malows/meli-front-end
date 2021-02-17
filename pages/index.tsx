import Head from 'next/head'
import { useEffect } from 'react'

import { useSearchState } from '../context'

import Container from '../components/layout/Container'
import CategoriesList from '../components/CategoriesList'
import ProductItem from '../components/ProductItem'

export default function Index (): JSX.Element {
    useEffect(() => {
        setState({ categories: [], items: [] })
    }, [])

    const [state, setState] = useSearchState()

    const items = state.items.map((item: HydratedSearchItem) => <ProductItem item={item} key={item.id} />)

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container>
                    <CategoriesList categories={state.categories} />

                    <div className="block">
                        {items}
                    </div>
                </Container>
            </main>

            <style jsx>{`
                main {
                    background-color: var(--light-color);
                    height: calc(100vh - 3.5rem);
                }

                .block {
                    background-color: white;
                    border-radius: var(--border-radius);
                }
            `}</style>
        </>
    )
}
