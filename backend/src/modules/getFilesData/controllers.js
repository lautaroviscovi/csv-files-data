'use strict'

import { FilesService } from './services.js'
import { sanitizeData } from './utils.js'

export class FilesController {
  static async getList () {
    try {
      const data = await FilesService.getList()
      return data
    } catch (error) {
      throw error(error)
    }
  }

  static async getFilesData (fileName) {
    try {
      const files = []
      const dataList = await FilesService.getList()
      if (fileName === undefined) {
        for (const file of dataList.files) {
          const data = await FilesService.getFilesData(file)
          files.push(sanitizeData(data))
        }
        const filesData = files.filter(file => file !== null)
        return filesData
      }
      const data = await FilesService.getFilesData(fileName)
      files.push(sanitizeData(data))
      return files
    } catch (error) {
      throw error(error)
    }
  }
}
