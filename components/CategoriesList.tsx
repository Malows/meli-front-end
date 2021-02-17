
declare type CategoriesListProps = {
    categories: string[]
}

export default function CategoriesList ({ categories }: CategoriesListProps ): JSX.Element {
    const text = categories.join(' > ')

    return (
        <>
            <p>{text}</p>

            <style jsx>{`
                p {
                    margin: 14px 0;
                    color: var(--fade-color)
                }
            `}</style>
        </>
    )
}
