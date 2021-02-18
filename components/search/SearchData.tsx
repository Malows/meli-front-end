import Image from 'next/image'

import format from '../../utils/numbers'

type SearchDataProps = {
    title: string,
    free_shipping: boolean,
    price: Price,
}

export default function SearchData ({ title, free_shipping, price }: SearchDataProps): JSX.Element {
    const shipping = free_shipping
        ? (
            <div className="shipping">
                <Image src="/ic_shipping.png" width={20} height={20} layout="fixed" />
            </div>
        )
        : null

    return (
        <>
            <div className="price">
                <p>{price.currency} {format(price.amount)}</p>
                {shipping}
            </div>

            <p className="title">{title}</p>

            <style jsx>{`
                .price {
                    margin: 1rem 0 2rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    font-size: 24px;
                }

                .shipping {
                    padding: 2rem 1rem;
                }

                .title {
                    font-size: 18px;
                }
            `}</style>
        </>
    )
}
