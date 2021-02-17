import { search, getCategories, getItem, getItemDescription } from './services'

/**
 *
 * @param item
 *
 * @returns {Price}
 */
export function priceFormatter (item: SearchResultItem|ItemResponse): Price {
    const segments = item.price
        .toFixed(2)
        .split('.')
        .map(Number)

    return {
        currency: '$',
        amount: segments[0],
        decimals: segments[1],
    }
}

/**
 *
 * @param item
 */
export function hydrateSearch (item: SearchResultItem): HydratedSearchItem {
    return {
        id: item.id,
        title: item.title,
        condition: item.condition,
        free_shipping: item.free_shipping,
        price: priceFormatter(item),
        picture: item.thumbnail.replace('http:', 'https:')
    }
}

/**
 *
 * @param {string} query
 *
 * @returns {Promise<any>}
 */
export async function fetchQuery (query: string): Promise<HydratedSearchResponse> {
    const response = await search(query)

    const categories = response.results.length === 0
        ? []
        : await getCategories(response.results[0].category_id)

    return {
        author: { name: '', lastname: '' }, // TODO
        categories,
        items: response.results.map(hydrateSearch)
    }
}

/**
 *
 * @param {string} id
 *
 * @returns {Promise<ProductItem>}
 */
export async function fetchItem (id: string): Promise<{ author: Author, item: ProductItem }> {
    const item = await getItem(id)

    const { plain_text: description } = await getItemDescription(id)

    return {
        author: { name: '', lastname: '' }, // TODO
        item: {
            id: item.id,
            title: item.title,
            price: priceFormatter(item),
            description,
            picture: item.secure_thumbnail,
            free_shipping: item.shipping.free_shipping,
            condition: item.condition,
            sold_quantity: item.sold_quantity,
        }
    }
}
