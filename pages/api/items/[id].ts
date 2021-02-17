import Joi from 'joi'
import { NextApiRequest, NextApiResponse } from 'next'

import validator from '../../../utils/validator'
import { fetchItem } from '../../../utils/api'

const schema = Joi.object({
    id: Joi.string().required()
})

/**
 *
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 *
 * @returns {Promise<void>}
 */
async function handler (req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const item = await fetchItem(req.query.id as string)

    res.status(200).json(item)
}

export default validator(schema, handler)
