import routerx from 'express-promise-router';
import gradoController from '../controllers/GradoController';

const router = routerx();

router.post('/add', gradoController.add);
router.get('/query', gradoController.query);
router.get('/list', gradoController.list);
router.put('/update', gradoController.update);
router.delete('/remove', gradoController.remove);
router.put('activate', gradoController.activate);
router.put('/deactivate', gradoController.deactivate);

export default router;
