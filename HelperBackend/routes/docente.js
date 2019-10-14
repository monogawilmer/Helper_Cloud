import routerx from 'express-promise-router';
import docenteController from '../controllers/DocenteController';

const router = routerx();

router.post('/add', docenteController.add);
router.get('/query', docenteController.query);
router.get('/list', docenteController.list);
router.put('/update', docenteController.update);
router.delete('/remove', docenteController.remove);
router.put('activate', docenteController.activate);
router.put('/deactivate', docenteController.deactivate);

export default router;
