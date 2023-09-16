import { Router } from 'express';

import LaboratoryRouter from '@/modules/laboratory/api/routes/Laboratory.routes';
import CourseRouter from '@/modules/course/api/routes/Course.routes';
import scheduleRouter from '@/modules/schedule/api/routes/schedule.routes';
import authRouter from '@/modules/auth/auth/api/routes/auth.routes';

const router = Router();

router.use('/auth', authRouter)
router.use('/laboratory', LaboratoryRouter);
router.use('/course', CourseRouter);
router.use('/schedule', scheduleRouter);

export default router;