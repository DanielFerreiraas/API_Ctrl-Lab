import { Router } from 'express';

import exampleOneRouter from '@/modules/mod-example/exampleOne/api/routes/exampleOne.routes';
import exampleTwoRouter from '@/modules/mod-example/exampleTwo/api/routes/exampleTwo.routes';
import LaboratoryRouter from '@/modules/laboratory/api/routes/Laboratory.routes';
import CourseRouter from '@/modules/course/api/routes/Course.routes';

const router = Router();

router.use('/exampleOne', exampleOneRouter)
router.use('/exampleTwo', exampleTwoRouter)
router.use('/laboratory', LaboratoryRouter)
router.use('/course', CourseRouter)

export default router;