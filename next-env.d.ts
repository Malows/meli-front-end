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
    category_id: string,
    condition: string,
    currency_id: string,
    free_shipping: boolean,
    thumbnail: string,
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
 * Internal API responses types
 *
 */
declare type Author = {
    name: string,
    lastname: string,
}

declare type Price = {
    currency: string,
    amount: number,
    decimals: number
}

declare type HydratedSearchItem = {
    id: string,
    title: string,
    price: Price,
    picture: string,
    condition: string,
    free_shipping: boolean,
}

declare type HydratedSearchResponse = {
    author: Author,
    categories: string[],
    items: HydratedSearchItem[],
}


/**
 *
 * Domain types
 *
 */
declare type ProductItem = {
    id: string,
    title: string,
    price: Price,
    condition: string,
    picture: string,
    free_shipping: boolean,
    description: string,
    sold_quantity: number,
}
