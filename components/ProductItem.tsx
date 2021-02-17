import Image from 'next/image'
import Link from 'next/link'

type ProductItemProps = {
    item: HydratedSearchItem
}

export default function ProductItem ({ item }: ProductItemProps): JSX.Element {
    const shipping = item.free_shipping
        ? (
            <div className="product-item__shipping">
                <Image src="/ic_shipping.png" width={20} height={20} layout="fixed" />
            </div>
        )
        : null

    return (
        <>
            <Link href={`/items/${item.id}`}>
                <a>
                    <div className="product-item">
                        <div className="product-item__image">
                            <Image src={item.picture} width={180} height={180} layout="intrinsic" objectFit="contain" className="rounded" />
                        </div>

                        <div className="product-item__data">
                            <div className="product-item__price">
                                <p>{item.price.currency} {item.price.amount}</p>
                                {shipping}
                            </div>
                            <div className="product-item__title">{item.title}</div>
                        </div>

                        <div className="product-item__place">{item.place}</div>

                    </div>
                </a>
            </Link>

            <style jsx>{`
                .product-item {
                    display: grid;
                    grid-template-columns: 2fr 6fr 2fr;
                    grid-template-areas: "image data place"
                }

                .product-item__image {
                    grid-area: image;
                    padding: 1rem;
                }

                .product-item__data {
                    grid-area: data;
                }

                .product-item__price {
                    margin: 1rem 0 2rem;
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                    font-size: 24px;
                }

                .product-item__shipping {
                    padding: 2rem 1rem;
                }

                .product-item__title {
                    font-size: 18px;
                }

                .product-item__place {
                    grid-area: place;
                    margin: 3.5rem 0 0;
                    font-size: .75rem;
                    color: var(--grey-color);
                }
            `}</style>
        </>
    )
}
