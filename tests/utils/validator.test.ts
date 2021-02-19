import { NextApiRequest } from 'next'
import { ObjectSchema } from 'joi'
import validator from '../../utils/validator'

describe('validator', () => {
    it('a wrong data input should not pass to the handler', () => {
        const schema = {
            validate: jest.fn().mockReturnValue({ error: 'Wrong input' })
        }

        const res = {
            status: jest.fn().mockReturnThis(),

            json: jest.fn()
        }

        validator(schema as ObjectSchema, jest.fn())({ query: {} } as NextApiRequest, res as NextApiResponse)

        expect(schema.validate).toBeCalled()
        expect(res.status).toBeCalledWith(400)
        expect(res.json).toBeCalled()
    })

    it('a good data input should call the handler', () => {
        const schema = {
            validate: jest.fn().mockReturnValue({ error: null })
        }

        const res = {
            status: jest.fn().mockReturnThis(),

            json: jest.fn()
        }

        const handler = jest.fn()

        validator(schema as ObjectSchema, handler)({ query: {} } as NextApiRequest, res as NextApiResponse)

        expect(schema.validate).toBeCalled()
        expect(handler).toBeCalled()
        expect(res.status).not.toBeCalled()
        expect(res.json).not.toBeCalled()
    })
})
