import { render, screen } from '@testing-library/react'

import ProductData from '../../../components/product/ProductData'

describe('CategoriesList Component', () => {
    it('render with a single sold product', async () => {
        render(
            <ProductData
                title="title"
                sold_quantity={1}
                condition="new"
                price={{ currency: '$', amount: 12345, decimals: 0 }}
            />
        )

        expect(await screen.findByText('title')).toBeInTheDocument()
        expect(await screen.findByText('Nuevo - 1 vendido')).toBeInTheDocument()
        expect(await screen.findByText('$ 12.345')).toBeInTheDocument()
    })

    it('render with multiple sold products', async () => {
        render(
            <ProductData
                title="title"
                sold_quantity={2}
                condition="used"
                price={{ currency: '$', amount: 1234, decimals: 0 }}
            />
        )

        expect(await screen.findByText('title')).toBeInTheDocument()
        expect(await screen.findByText('Usado - 2 vendidos')).toBeInTheDocument()
        expect(await screen.findByText('$ 1234')).toBeInTheDocument()
    })
});
