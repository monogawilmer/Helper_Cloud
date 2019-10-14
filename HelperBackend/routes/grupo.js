import routerx from 'express-promise-router';
import grupoController from '../controllers/GrupoController';

const router = routerx();

router.post('/add', grupoController.add);
router.get('/query', grupoController.query);
router.get('/list', grupoController.list);
router.put('/update', grupoController.update);
router.delete('/remove', grupoController.remove);
router.put('activate', grupoController.activate);
router.put('/deactivate', grupoController.deactivate);

export default router;
