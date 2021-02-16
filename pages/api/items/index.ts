import Joi from 'joi'
import { NextApiRequest, NextApiResponse } from 'next'

import validator from '../../../utils/validator'
import { fetchQuery } from '../../../utils/api'

const schema = Joi.object({
    q: Joi.string().required()
})

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 *
 * @returns {Promise<void>}
 */
async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const query = await fetchQuery(req.query.q as string)

    res.status(200).json(query)
}

export default validator(schema, handler)
