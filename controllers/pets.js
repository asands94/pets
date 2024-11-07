const Pet = require('../models/pet.js')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body)
    res.status(201).json(createdPet)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/', async (req, res) => {
  try {
    const foundPets = await Pet.find()
    res.status(200).json(foundPets)
  } catch (error) {
    res.status(500).json({ error: error.message })
})

module.exports = router
