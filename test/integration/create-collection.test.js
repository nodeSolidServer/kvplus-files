'use strict'

const util = require('../test-utils')

const chai = require('chai')
const { expect } = chai
chai.use(require('dirty-chai'))

const KVPFileStore = require('../../src/store')
const storeBasePath = './test/store/'

describe('Store API', () => {
  describe('createCollection()', () => {
    it('should create a collection dir', () => {
      const store = new KVPFileStore({ path: storeBasePath })
      const collectionName = 'users1'

      return store.createCollection(collectionName)
        .then(() => {
          return util.collectionDirExists(collectionName)
        })
        .then(exists => {
          // Collection dir should exist after createCollection()
          expect(exists).to.be.true()

          if (exists) {
            return util.removeCollectionDir(collectionName)
          }
        })
    })
  })

  describe('createCollectionSync()', () => {
    it('should create a collection dir', () => {
      const store = new KVPFileStore({ path: storeBasePath })
      const collectionName = 'users2'

      store.createCollectionSync(collectionName)

      return util.collectionDirExists(collectionName)
        .then(exists => {
          // Collection dir should exist after createCollection()
          expect(exists).to.be.true()

          if (exists) {
            return util.removeCollectionDir(collectionName)
          }
        })
    })
  })
})
