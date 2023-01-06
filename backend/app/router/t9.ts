import { Request, Response, Router, NextFunction } from 'express'

import * as t9Controller from '../controller/t9Controller'

const router = Router()

router.get('/:number', (req: Request, res: Response, next: NextFunction) => {
  try {
    const numbers: string = req.params.number
    const response = t9Controller.getT9Combination(numbers)
    res.status(200)
    res.json(response)
  } catch (e) {
    next(e)
  }
  });

  export default router