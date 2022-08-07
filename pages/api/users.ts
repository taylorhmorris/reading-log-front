import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    username: string,
    email: string,
    password: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(req.body)
}