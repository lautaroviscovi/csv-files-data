'use strict'

import { response as Response } from 'express'
import { FilesController } from './controllers.js'

export class FilesHandler {
  static async getList (request, response = Response) {
    try {
      const data = await FilesController.getList()
      response.status(200).json({ message: data })
    } catch (error) {
      response.status(500).json(error)
    }
  }

  static async getFilesData (request, response = Response) {
    const fileName = request.query.fileName

    try {
      const data = await FilesController.getFilesData(fileName)
      response.status(200).json(data)
    } catch (error) {
      response.status(500).json(error)
    }
  }
}
