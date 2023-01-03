'use strict'

import cors from 'cors'
import express from 'express'
import { config } from './config/index.js'
import { router as v1Router } from './router/index.js'

const app = express()

app.use(cors())
app.use('/', v1Router)

app.listen(config.port, () => { console.log(`Server running on port ${config.port}`) })
