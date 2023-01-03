'use strict'

import { Router } from 'express'

import { router as FilesRouter } from './getFilesData/index.js'

const router = new Router()

router.use('/', FilesRouter)

export { router }
