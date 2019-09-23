import routerx from 'express-promise-router';
import administradorRouter from './administrador';
import docenteRouter from './docente';
import gradoRouter from './grado';
import grupoRouter from './grupo';
import estudianteRouter from './estudiante';
const router=routerx();

router.use('/administrador',administradorRouter);
router.use('/docente',docenteRouter);
router.use('/grado',gradoRouter);
router.use('/grupo',grupoRouter);
router.use('/estudiante',estudianteRouter);

export default router;