import express from 'express'
import {findAll,create, findOne, update, remove} from '../controllers/user.js'

const router = express.Router()

router.get('/api/v1/users', findAll)
router.get('/api/v1/users/:id',findOne)
router.post('/api/v1/users', create)
router.put('/api/v1/users/:id', update)
router.delete('/api/v1/users/:id', remove)

export default router