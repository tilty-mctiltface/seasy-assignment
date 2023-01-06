import exp from "constants";
import { Router } from "express";
import t9Routes from './t9'

const router = Router()

router.use('/t9', t9Routes)

export default router