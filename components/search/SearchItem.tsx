import Image from 'next/image'
import Link from 'next/link'

import SearchData from './SearchData'

type SearchItemProps = {
    item: HydratedSearchItem
}

export default function SearchItem ({ item }: SearchItemProps): JSX.Element {
    return (
        <>
            <Link href={`/items/${item.id}`}>
                <a>
                    <div className="product-item">
                        <div className="product-item__image">
                            <Image src={item.picture} width={180} height={180} layout="intrinsic" objectFit="contain" className="rounded" />
                        </div>

                        <div className="product-item__data">
                            <SearchData {...item} />
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
