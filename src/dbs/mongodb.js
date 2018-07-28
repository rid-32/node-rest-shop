import mongoose from 'mongoose'
import Promise from 'bluebird'
import config from 'config'

mongoose.Promise = Promise

export default new Promise((resolve, reject) => {
  mongoose.connect(
    config.get('mongodbUrl'),
    { useNewUrlParser: true }
  )

  const db = mongoose.connection

  db.on('open', () => {
    resolve(db)
  })
  db.on('error', error => {
    console.log(error)
    reject(error)
  })
})
