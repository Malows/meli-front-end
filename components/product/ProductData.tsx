import format from '../../utils/numbers'

type ProductDataProps = {
    title: string,
    price: Price,
    sold_quantity: number,
    condition: string,
}

export default function ProductData ({
    title,
    price,
    sold_quantity,
    condition
}: ProductDataProps): JSX.Element {
    const conditions: { [key: string]: string } = {
        'new': 'Nuevo',
        'used': 'Usado',
    }

    return (
        <>
            <p>{conditions[condition]} - {sold_quantity} vendido{sold_quantity > 1 ? 's' : ''}</p>

            <h3>{title}</h3>

            <h2>{price.currency} {format(price.amount)}</h2>

            <button className="rounded">Comprar</button>

            <style jsx>{`
                p {
                    font-size: 14px;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }

                h3 {
                    font-size: 24px;
                    margin-bottom: 2rem;
                }

                h2 {
                    font-size: 46px;
                    margin-bottom: 2rem;
                }

                button {
                    color: white;
                    background-color: var(--action-color);
                    padding: 1rem 0;
                    margin-right: 2rem;
                    width: 100%;
                    text-align: center;
                    font-size: 16px;
                    border: none;
                }
            `}</style>
        </>
    )
}
