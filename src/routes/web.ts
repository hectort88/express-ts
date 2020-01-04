import express, { Request, Response, NextFunction } from 'express'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'

const router = express.Router()

// Web routes with csrf support
router.use(cookieParser())
router.use(csrf({ cookie: true }))
router.use((req: Request, res: Response, next: NextFunction) => {
  req.app.locals.csrfToken = req.csrfToken()
  next()
})

router.get('/', (req: Request, res: Response) => res.end('It works'))

router.post('/', (req: Request, res: Response) => res.json(req.body))

router.get('/form', (req: Request, res: Response) => {
  res.render('index.njk')
})

export default router
