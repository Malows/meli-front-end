
type ProductDescriptionProps = {
    description: string
}

export default function ProductDescription ({ description }: ProductDescriptionProps): JSX.Element {
    return (
        <>
            <h4>Descripción del producto</h4>

            <p>{description}</p>

            <style jsx>{`
                h4 {
                    font-size: 28px;
                    margin-bottom: 2rem;
                    margin-left: 2rem;
                }

                p {
                    font-size: 16px;
                    margin-bottom: 2rem;
                    margin-left: 2rem;
                }
            `}</style>
        </>
    )
}
