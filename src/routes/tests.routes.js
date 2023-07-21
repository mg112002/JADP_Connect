const { Router } = require('express')
const TestCtrl = require('../controllers/tests.controllers')
const { authenticate } = require('../middlewares/auth')
const router = Router()

router.get('/', authenticate, TestCtrl.getTests)
router.post('/', authenticate, TestCtrl.postTest)
// router.get('/:id', TestCtrl.getTestById)
router.delete('/:id', authenticate, TestCtrl.deleteTest)
router.get('/search', authenticate, TestCtrl.searchTestsByKey)
router.get('/dates', authenticate, TestCtrl.searchTestsByDates)


module.exports = router