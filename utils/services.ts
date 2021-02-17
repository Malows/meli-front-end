import fetch from 'node-fetch'

const SEARCH_URL = 'https://api.mercadolibre.com/sites/MLA/search'

const SEARCH_LIMIT = 4

const ITEMS_URL = 'https://api.mercadolibre.com/items'

const CATEGORIES_URL = 'https://api.mercadolibre.com/categories'

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
 * @returns {Promise<string[]>}
 */
export async function getCategories (id: string) : Promise<string[]> {
    const url = `${CATEGORIES_URL}/${id}`

    const res = await fetch(url)
    const data = await res.json()

    return data?.path_from_root.map((x: { name: string }) => x.name) ?? []
}

/**
 *
 * @param {string} id
 *
 * @returns {Promise<ItemResponse>}
 */
export async function getItem (id: string): Promise<ItemResponse> {
    const url = `${ITEMS_URL}/${id}`

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
    const url = `${ITEMS_URL}/${id}/description`

    const res = await fetch(url)

    return res.json()
}
