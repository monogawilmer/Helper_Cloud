import routerx from 'express-promise-router';
import administradorController from '../controllers/AdministradorController';

const router = routerx();

router.post('/add', administradorController.add);
router.get('/query', administradorController.query);
router.get('/list', administradorController.list);
router.put('/update', administradorController.update);
router.delete('/remove', administradorController.remove);
router.put('activate', administradorController.activate);
router.put('/deactivate', administradorController.deactivate);

export default router;
