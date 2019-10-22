import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.end('It works'))

export default router
