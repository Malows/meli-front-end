import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { fetchItem } from '../../utils/api'

import Container from '../../components/layout/Container'
import CategoriesList from '../../components/CategoriesList'
import Product from '../../components/product/Product'

export default function Item (): JSX.Element {
    const router = useRouter()
    const { id } = router.query

    const [item, setItem] = useState({} as ProductItem)

    useEffect(() => {
        if (!id) {
            router.push('/')
        } else {
            const _id = Array.isArray(id) ? id[0] : id

            fetchItem(_id)
                .then(({ item }) => {
                    setItem(item)
                })
                .catch(() => {
                    router.push('/')
                })
        }
    }, [id, setItem])

    const categories = item?.categories
        ? <CategoriesList categories={item.categories} />
        : null

    const product = item?.id
        ? <Product product={item} />
        : null

    return (
        <>
            <Head>
                <title>{item.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Container>
                    {categories}

                    <div className="block">
                        {product}
                    </div>
                </Container>
            </main>
        </>
    )
}
