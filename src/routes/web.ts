import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.end('It works'))

router.post('/', (req: Request, res: Response) => res.json({ message: 'It works' }))

export default router
