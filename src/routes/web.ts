import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', (req: Request, res: Response) => res.end('It works'))

router.post('/', (req: Request, res: Response) => res.json(req.body))

router.get('/form', (req: Request, res: Response) => {
  res.render('index.html', { csrfToken: req.csrfToken() })
})

export default router
