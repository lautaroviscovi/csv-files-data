'use strict'

import Router from 'express'

import { FilesHandler } from '../../modules/getFilesData/handlers.js'

const router = new Router()

router.use('/files/list', FilesHandler.getList)
router.use('/files/data', FilesHandler.getFilesData)

export { router }
