import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.json({ message: 'It works' }))

router.post('/', (req: Request, res: Response) => res.json(req.body))

export default router