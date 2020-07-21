import express    from 'express';
import controller from '../controllers/carros';

var router = express.Router();

router.get('/allCars', controller.getCars);
router.post('/addCar', controller.addCar);
router.put('/updateCar', controller.updateCar);
router.delete('/deleteCar/:idCar', controller.deleteCar);

module.exports = router;