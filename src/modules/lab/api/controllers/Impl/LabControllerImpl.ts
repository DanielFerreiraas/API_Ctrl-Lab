import { injectable, inject } from 'tsyringe';

import { Request, Response } from 'express';
import { LabController } from '../LabController';
import { LabService } from '@/modules/lab/business/services/LabService';
import { LabDTO } from '@/modules/lab/dtos/LabDTO';

@injectable()
export class LabControllerImpl implements LabController {
    
    constructor(
        @inject('LabService')
        private labService: LabService
    ) {

    }

    public async newLab(req: Request, res: Response): Promise<Response> {

        const auth = await this.labService.createLabs(req.body as LabDTO);
        return res.json(auth);

    }
}