import { render, screen } from '@testing-library/react'

import ProductDescription from '../../../components/product/ProductDescription'

describe('CategoriesList Component', () => {
    it('render the description', async () => {
        render(<ProductDescription description="test" />)

        expect(await screen.findByText('Descripción del producto')).toBeInTheDocument()

        expect(await screen.findByText('test')).toBeInTheDocument()
    });
});
