declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.css' {
    const content: string;
    export default content;
}

/**
 *
 * MercadoLibre API responses types
 *
 */
declare type SearchResultItem = {
    id: string,
    title: string,
    price: number,
    currency_id: string,
    condition: string,
    thumbnail: string,
    free_shipping: boolean,
}

declare type SearchResponse = {
    paging: {
        total: number,
        primary_results: number,
        offset: number,
        limit: number
    },
    results: SearchResultItem[]
}

declare type ItemResponse = {
    id: string,
    title: string,
    category_id: string,
    price: number,
    currency_id: string,
    sold_quantity: number,
    condition: string,
    secure_thumbnail: string,
    shipping: {
      free_shipping: boolean
    }
}

declare type ItemDescriptionResponse = {
    plain_text: string,
}


/**
 *
 * Domain types
 *
 */
declare type Price = {
    currency: string,
    amount: number,
    decimals: number
}

declare type ProductItem = {
    id: string,
    title: string,
    price: Price,
    condition: string,
    picture: string,
    free_shipping: boolean,
    description: string,
}

