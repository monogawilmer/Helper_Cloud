import routerx from 'express-promise-router';
import estudianteController from '../controllers/EstudianteController';

const router = routerx();

router.post('/add', estudianteController.add);
router.get('/query', estudianteController.query);
router.get('/list', estudianteController.list);
router.put('/update', estudianteController.update);
router.delete('/remove', estudianteController.remove);
router.put('activate', estudianteController.activate);
router.put('/deactivate', estudianteController.deactivate);

export default router;
