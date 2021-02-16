import { ObjectSchema } from 'joi'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

/**
 *
 * @param {ObjectSchema} schema
 * @param {NextApiHandler} handler
 *
 * @returns {NextApiHandler}
 */
export default (schema: ObjectSchema, handler: NextApiHandler): NextApiHandler =>
    (req: NextApiRequest, res: NextApiResponse): void | Promise<void> => {
        const { error } = schema.validate(req.query)

        if (error) {
            return res.status(400).json({ message: error })
        }

        return handler(req, res)
    }
