import Image from 'next/image'

import ProductData from './ProductData'
import ProductDescription from './ProductDescription'

type ProductProps = {
    product: ProductItem
}

export default function Product ({ product }: ProductProps): JSX.Element {
    return (
        <>
            <div className="product">
                <div className="product__image">
                    <Image src={product.picture} height={680} width={680} layout="intrinsic" />
                </div>

                <div className="product__data">
                    <ProductData {...product} />
                </div>

                <div className="product__descritpion">
                    <ProductDescription {...product} />
                </div>
            </div>

            <style jsx>{`
                .product {
                    display: grid;

                    grid-template-columns: 7fr 3fr;
                    grid-template-areas: "image data" "desc .";

                    gap: 1rem;
                }

                .product__image {
                    grid-area: image;
                }

                .product__data {
                    grid-area: data;
                }

                .product__description {
                    grid-area: desc;
                }
            `}</style>
        </>
    )
}
