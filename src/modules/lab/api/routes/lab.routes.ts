import { Router } from 'express';
import { container } from 'tsyringe';
import { LabController } from '../controllers/LabController';

const labRouter = Router();
const LabController:LabController = container.resolve('LabController');

labRouter.post('/newLab', (req,res) => LabController.newLab(req,res));

export default labRouter;