import { Router } from 'express';

import exampleOneRouter from '@/modules/mod-example/exampleOne/api/routes/exampleOne.routes';

const router = Router();

router.use('/exampleOne', exampleOneRouter)

export default router;