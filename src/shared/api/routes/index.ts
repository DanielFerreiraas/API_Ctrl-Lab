import { Router } from 'express';

import exampleOneRouter from '@/modules/mod-example/exampleOne/api/routes/exampleOne.routes';
import exampleTwoRouter from '@/modules/mod-example/exampleTwo/api/routes/exampleTwo.routes';

const router = Router();

router.use('/exampleOne', exampleOneRouter)
router.use('/exampleTwo', exampleTwoRouter)

export default router;