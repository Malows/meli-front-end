import { render, screen } from '@testing-library/react'

import CategoriesList from '../../components/CategoriesList'

describe('CategoriesList Component', () => {
    it('renders without categories', () => {
        const { getAllByText } = render(<CategoriesList categories={[]} />)

        const parigraph = getAllByText('')

        expect(parigraph).toBeTruthy()
    });

    it('renders a single category', async () => {
        render(<CategoriesList categories={['qwe']} />)

        expect(await screen.findByText('qwe')).toBeInTheDocument()
    });

    it('renders a multiple categories', async () => {
        render(<CategoriesList categories={['asd', 'zxc']} />)

        expect(await screen.findByText('asd > zxc')).toBeInTheDocument()
    });
});
