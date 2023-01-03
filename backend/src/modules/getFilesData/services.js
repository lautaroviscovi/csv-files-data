'use strict'

import { HttpsGetRequest } from './utils.js'

export class FilesService {
  static async getList () {
    try {
      const url = 'https://echo-serv.tbxnet.com/v1/secret/files'
      const headers = {
        'Content-Type': 'application/json',
        authorization: 'Bearer aSuperSecretKey'
      }

      const data = await HttpsGetRequest(url, headers)
      return JSON.parse(data)
    } catch (error) {
      throw error(error)
    }
  }

  static async getFilesData (fileId) {
    try {
      const url = `https://echo-serv.tbxnet.com/v1/secret/file/${fileId}`
      const headers = {
        'Content-Type': 'application/json',
        authorization: 'Bearer aSuperSecretKey'
      }

      const data = await HttpsGetRequest(url, headers)
      return data.toString()
    } catch (error) {
      throw error(error)
    }
  }
}
