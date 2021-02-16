import fetch from 'node-fetch'

const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search'

const SEARCH_LIMIT = 4

const ITEMS_URL = 'https://api.mercadolibre.com/items'

/**
 *
 * @param {string} query
 *
 * @return {Promise<SearchResponse>}
 */
export async function search (query: string) : Promise<SearchResponse> {
    const url = new URL(SEARCH_URL)

    url.searchParams.append('q', query)
    url.searchParams.append('limit', SEARCH_LIMIT.toString())

    const res = await fetch(url.toString())

    return res.json()
}

/**
 *
 * @param {string} id
 *
 * @returns {Promise<ItemResponse>}
 */
export async function getItem (id: string): Promise<ItemResponse> {
    const url = new URL(`${ITEMS_URL}/${id}`)

    const res = await fetch(url)

    return res.json()
}

/**
 *
 * @param {string} id
 *
 * @returns {Promise<ItemDescriptionResponse>}
 */
export async function getItemDescription (id: string): Promise<ItemDescriptionResponse> {
    const url = new URL(`${ITEMS_URL}/${id}/description`)

    const res = await fetch(url)

    return res.json()
}

/**
 *
 * @param {string} query
 *
 * @returns {Promise<any>}
 */
export async function fetchQuery (query: string): Promise<any> {
    const response = await search(query)

    return response
}

/**
 *
 * @param {string} id
 *
 * @returns {Promise<ProductItem>}
 */
export async function fetchItem (id: string): Promise<ProductItem> {
    const item = await getItem(id)

    const { plain_text: description } = await getItemDescription(id)

    const segments = item.price
        .toFixed(2)
        .split('.')
        .map(Number)

    return {
        id: item.id,
        title: item.title,
        price: {
            currency: '$',
            amount: segments[0],
            decimals: segments[1],
        },
        description,
        picture: item.secure_thumbnail,
        free_shipping: item.shipping.free_shipping,
        condition: item.condition,
    }
}
