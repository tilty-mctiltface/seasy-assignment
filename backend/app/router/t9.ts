import { Request, Response, Router, NextFunction } from 'express'

import * as t9Controller from '../controller/t9Controller'
import * as wordFileController from '../controller/wordFileController'

const router = Router()

router.get('/:number', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const numbers: string = req.params.number

    const combinations = t9Controller.getT9Combination(numbers)
    const words = await wordFileController.wordsByCharacterStrings(combinations)
    
    res.status(200)
    res.json(words)
  } catch (e) {
    next(e)
  }
  })

  export default router