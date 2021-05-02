const express = require('express')
const router = express.Router();

const {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson,
    createPersonPostman
} = require('../controllers/people')

// router.post('/postman',createPersonPostman)
// router.get('/',getPeople)
// router.post('/',createPerson)
// router.put('/:id',updatePerson)
// router.delete('/:id',deletePerson )

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/').put(updatePerson).delete(deletePerson)


module.exports = router