import * as services from '../../utils/services'
import searchMockData from '../mockData/search.json'
import itemMockData from '../mockData/item.json'

import fetch from 'node-fetch'

jest.mock('node-fetch', ()=>jest.fn())

afterEach(() => {
    fetch.mockReset()
    fetch.mockClear()
})

afterAll(() => {
    fetch.mockRestore()
})

describe('search', () => {
    it('reach the external search service', async () => {
        fetch.mockImplementation(()=> Promise.resolve({
            json: () => Promise.resolve(searchMockData)
        }))

        await services.search('ipad')

        expect(fetch).toHaveBeenLastCalledWith(`https://api.mercadolibre.com/sites/MLA/search?q=${'ipad'}&limit=4`)
    })
})

describe('getItem', () => {
    it('reach the external search service', async () => {
        fetch.mockImplementation(()=> Promise.resolve({
            json: () => Promise.resolve(itemMockData)
        }))

        await services.getItem('ipad')

        expect(fetch).toHaveBeenLastCalledWith(`https://api.mercadolibre.com/items/${'ipad'}`)
    })
})

describe('getItemDescription', () => {
    it('reach the external search service', async () => {
        fetch.mockImplementation(()=> Promise.resolve({
            json: () => Promise.resolve(searchMockData)
        }))

        await services.getItemDescription('ipad')

        expect(fetch).toHaveBeenLastCalledWith(`https://api.mercadolibre.com/items/${'ipad'}/description`)
    })
})

describe('getCategories', () => {
    it('reach the external search service', async () => {
        fetch.mockImplementation(()=> Promise.resolve({
            json: () => Promise.resolve({
                path_from_root: [
                    { name: 'Computación' }
                ]
            })
        }))

        const response = await services.getCategories('ipad')

        expect(response).toEqual(['Computación'])
        expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/categories/ipad')
    })

    it('should return an empty array on failure', async () => {
        fetch.mockImplementation(()=> Promise.resolve({
            json: () => Promise.resolve({})
        }))

        const response = await services.getCategories('ipad')

        expect(response).toEqual([])
        expect(fetch).toHaveBeenLastCalledWith('https://api.mercadolibre.com/categories/ipad')
    })
})
