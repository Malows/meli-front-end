import { render } from '@testing-library/react'

import Product from '../../../components/product/Product'

describe('Product Component', () => {
    it('renders without categories', async () => {
        const { asFragment } = render(
            <Product
                product={{
                    id: 'id',
                    title: 'title',
                    sold_quantity: 2,
                    condition: 'new',
                    price: { currency: '$', amount: 12345, decimals: 0 },
                    free_shipping: false,
                    description: 'desc',
                    picture: 'https://http2.mlstatic.com/example.png',
                    categories: ['asd'],
                    place: 'Wakanda',
                }}
            />
        )

        expect(asFragment()).toMatchSnapshot()
    })
})
