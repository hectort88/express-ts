import express, { Request, Response } from 'express'
import cors from 'cors'

const router = express.Router()
router.use(cors())

router.get('/', (req: Request, res: Response) => res.json({ message: 'It works' }))

router.post('/', (req: Request, res: Response) => res.json(req.body))

export default router