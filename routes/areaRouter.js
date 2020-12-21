const router = require('express').Router()
const areaCtrl = require('../controllers/areaCtrl')


router.route('/area')
    .get(areaCtrl.getAreas)
    .post(areaCtrl.createArea)

router.route('/area/:id')
    .delete(areaCtrl.deleteArea)
    .put(areaCtrl.updateArea)


module.exports = router