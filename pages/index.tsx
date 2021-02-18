import Head from 'next/head'
import { useEffect } from 'react'

import { useSearchState } from '../context'

import Container from '../components/layout/Container'
import CategoriesList from '../components/CategoriesList'
import SearchItem from '../components/search/SearchItem'

export default function Index (): JSX.Element {
    useEffect(() => {
        setState({ categories: [], items: [] })
    }, [])

    const [state, setState] = useSearchState()

    const items = state.items.map((item: HydratedSearchItem) => <SearchItem item={item} key={item.id} />)

    return (
        <>
            <Head>
                <title>Nunca dejes de buscar</title>
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
