import * as api from '../../utils/api'
import * as services from '../../utils/services'

import searchMockData from '../mockData/search.json'
import emptySearchMockData from '../mockData/emptySearch.json'
import itemMockData from '../mockData/item.json'
// import { priceFormatter, hydrateSearch, fetchQuery, fetchItem } as api from '../../utils/api'

describe('priceFormatter', () => {
    it('should return a formatted price', () => {
        const price = api.priceFormatter({ price: 123 } as ItemResponse)

        expect(price).toHaveProperty('currency')
        expect(price).toHaveProperty('amount')
        expect(price).toHaveProperty('decimals')

        expect(price.currency).toBe('$')
        expect(price.amount).toBe(123)
        expect(price.decimals).toBe(0)
    })

    it('should return a price with decimals', () => {
        const price = api.priceFormatter({ price: 123.45 } as ItemResponse)

        expect(price.amount).toBe(123)
        expect(price.decimals).toBe(45)
    })
})

describe('hydrateSearch', () => {
    it('should return the transformed response data into domain data', () => {
        const init: SearchResultItem = {
            id: 'id',
            title: 'title',
            condition: 'condition',
            category_id: 'category_id',
            currency_id: 'ARS',
            shipping: { free_shipping: true },
            price: 123,
            thumbnail: 'http://thumbnail.com',
            address: { state_name: 'Wakanda' },
        }

        const result = api.hydrateSearch(init)

        expect(result).toHaveProperty('id')
        expect(result).toHaveProperty('title')
        expect(result).toHaveProperty('condition')
        expect(result).toHaveProperty('free_shipping')
        expect(result).toHaveProperty('price')
        expect(result).toHaveProperty('picture')
        expect(result).toHaveProperty('place')

        expect(result).not.toHaveProperty('category_id')
        expect(result).not.toHaveProperty('currency_id')

        expect(result.id).toBe('id')
        expect(result.title).toBe('title')
        expect(result.condition).toBe('condition')
        expect(result.free_shipping).toBe(true)
        expect(result.price).toEqual({ currency: '$', amount: 123, decimals: 0 })
        expect(result.picture).toBe('https://thumbnail.com')
        expect(result.place).toBe('Wakanda')
    })
})

describe('fetchQuery', () => {
    it('should return the fetched data from the search api', async () => {
        const searchMock = jest.spyOn(services, 'search');
        searchMock.mockImplementation(() => Promise.resolve(searchMockData as SearchResponse));

        const getCategoriesMock = jest.spyOn(services, 'getCategories');
        getCategoriesMock.mockImplementation(() => Promise.resolve(['asd', 'qwe', 'zxc']));

        const response = await api.fetchQuery('AMD')

        expect(response).toEqual({
            author: { name: '', lastname: '' },
            categories: ['asd', 'qwe', 'zxc'],
            items: searchMockData.results.map(api.hydrateSearch)
        });

        expect(searchMock).toBeCalledTimes(1)
        expect(getCategoriesMock).toBeCalledTimes(1)

        searchMock.mockRestore();
        getCategoriesMock.mockRestore();
    })

    it('handling an empty api response', async () => {
        const searchMock = jest.spyOn(services, 'search');
        searchMock.mockImplementation(() => Promise.resolve(emptySearchMockData as SearchResponse));

        const getCategoriesMock = jest.spyOn(services, 'getCategories');
        getCategoriesMock.mockImplementation(() => Promise.resolve(['asd', 'qwe', 'zxc']));

        const response = await api.fetchQuery('AMD')

        expect(response).toEqual({
            author: { name: '', lastname: '' },
            categories: [],
            items: []
        });

        expect(searchMock).toBeCalledTimes(1)
        expect(getCategoriesMock).not.toBeCalled()

        searchMock.mockRestore();
        getCategoriesMock.mockRestore();
    })
})


describe('fetchItem', () => {
    it('should return the fetched data from the item api', async () => {
        const itemMock = jest.spyOn(services, 'getItem');
        itemMock.mockImplementation(() => Promise.resolve(itemMockData as ItemResponse));

        const getCategoriesMock = jest.spyOn(services, 'getCategories');
        getCategoriesMock.mockImplementation(() => Promise.resolve(['asd', 'qwe', 'zxc']));

        const getDescriptionMock = jest.spyOn(services, 'getItemDescription');
        getDescriptionMock.mockImplementation(() => Promise.resolve({ plain_text: 'in my humble description' }));

        const response = await api.fetchItem('id AMD')

        expect(response.author).toEqual({ name: '', lastname: '' })
        expect(response.item).toBeTruthy();
        expect(response.item.categories).toEqual(['asd', 'qwe', 'zxc'])

        expect(itemMock).toBeCalledTimes(1)
        expect(getCategoriesMock).toBeCalledTimes(1)
        expect(getDescriptionMock).toBeCalledTimes(1)

        itemMock.mockRestore();
        getCategoriesMock.mockRestore();
        getDescriptionMock.mockRestore();
    })
})
