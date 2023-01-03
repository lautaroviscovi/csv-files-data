import chai from 'chai'
import chaiHttp from 'chai-http'
import { FilesService } from '../modules/getFilesData/services.js'

chai.use(chaiHttp)
const expect = chai.expect
const it = global.it
const describe = global.describe

describe('API tests', () => {
  it('should return a list of files', async () => {
    const response = await FilesService.getList()
    expect(response).to.be.an('object')
    expect(response).to.have.property('files')
    expect(response.files).to.be.an('array')
    expect(response.files.length).to.be.at.least(1)
  })

  it('should return a list of files with the correct file names', async () => {
    const response = await FilesService.getList()
    expect(response.files).to.include('test1.csv')
    expect(response.files).to.include('test2.csv')
    expect(response.files).to.include('test3.csv')
    expect(response.files).to.include('test4.csv')
    expect(response.files).to.include('test5.csv')
    expect(response.files).to.include('test6.csv')
    expect(response.files).to.include('test9.csv')
  })
})

describe('API tests', () => {
  it('should return a string with file data', async () => {
    const fileId = 'test1'
    const response = await FilesService.getFilesData(fileId)
    expect(response).to.be.a('string')
  })

  it('should return an error object if the file is not found', async () => {
    const fileId = 'nonexistent'
    try {
      await FilesService.getFilesData(fileId)
    } catch (error) {
      expect(error).to.be.an('error')
      expect(error.message).to.equal('Not Found')
    }
  })

  it('should return a string with the correct file data for a given file ID', async () => {
    const fileId = 'test1.csv'
    const response = await FilesService.getFilesData(fileId)
    expect(response).to.include('file,text,number,hex')
  })

  it('should return a string with the correct number of lines for a given file ID', async () => {
    const fileId = 'test2'
    const response = await FilesService.getFilesData(fileId)
    const lines = response.split('\n')
    expect(lines).to.have.lengthOf(1)
  })
})
