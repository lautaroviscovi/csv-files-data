'use strict'

import https from 'https'

export const HttpsGetRequest = async (url, headers) => {
  try {
    const data = await new Promise((resolve, reject) => {
      https.get(url, { headers }, (response) => {
        let data = ''

        response.on('data', (chunk) => {
          data += chunk
        })

        response.on('end', () => {
          resolve(data)
        })
      }).on('error', (error) => {
        reject(error)
      })
    })
    return data
  } catch (error) {
    throw error(error)
  }
}

export const sanitizeData = (data) => {
  const validHeaderRegex = /^(file|text|number|hex)$/
  const numberRegex = /^\d+$/
  const hexRegex = /^[\da-fA-F]{32}$/

  const rows = data.split('\n')
  const headers = rows[0].split(',')

  if (rows.length <= 1) return null
  if (!headers.every(header => validHeaderRegex.test(header))) return null

  const filesDataSet = { file: rows[1].split(',')[0], lines: [] }

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',')
    if (values.length !== 4) continue

    const lines = {}
    for (let j = 1; j < values.length; j++) {
      if (!values[j] || values[j].length === 0) continue

      const columnValidators = {
        number: value => numberRegex.test(value),
        hex: value => hexRegex.test(value)
      }

      const columnName = headers[j]
      const columnValidator = columnValidators[columnName] || (() => true)

      if (columnValidator(values[j])) lines[headers[j]] = Number(values[j]) || values[j]
    }
    filesDataSet.lines.push(lines)
  }

  return filesDataSet
}
