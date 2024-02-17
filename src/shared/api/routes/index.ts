import { Router } from 'express';

import { ensureIsAuthenticated } from '../middlewares/AuthMiddleware';

import LaboratoryRouter from '../../../modules/laboratory/api/routes/Laboratory.routes';
import CourseRouter from '../../../modules/course/api/routes/Course.routes';
import scheduleRouter from '../../../modules/schedule/api/routes/schedule.routes';
import authRouter from '../../../modules/auth/auth/api/routes/auth.routes';
import UserRouter from '../../../modules/auth/user/api/routes/user.route';
import labRouter from '@/modules/lab/api/routes/lab.routes';

const router = Router();

router.use('/auth', authRouter);
router.use('/lab', labRouter)

// router.use(ensureIsAuthenticated);
router.use('/user', UserRouter);
router.use('/laboratory', LaboratoryRouter);
router.use('/course', CourseRouter);
router.use('/schedule', scheduleRouter);

export default router;