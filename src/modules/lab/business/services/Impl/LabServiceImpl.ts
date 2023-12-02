import { injectable, inject } from 'tsyringe';

import { sign } from 'jsonwebtoken';
import { LabService } from '../LabService';
import { LabDTO, tokenDTO } from '@/modules/lab/dtos/LabDTO';
import { LaboratoryService } from '@/modules/laboratory/business/services/LaboratoryService';

@injectable()
export class LabServiceImpl implements LabService {

    constructor(
        @inject('LaboratoryService')
        private laboratoryService: LaboratoryService
    ) { }

    async createLabs(lab: LabDTO): Promise<tokenDTO> {

        const registerLab = await this.laboratoryService.createItem({
            name: lab.name,
            location: lab.location,
            hourOpen: lab.hourOpen,
            hourClose: lab.hourClose,
            src: ''
        })

        const laboratory = await this.laboratoryService.getItemById(registerLab.id)

        const token = sign({}, process.env.TK_SECRET, {
                    subject: laboratory.id
                });
        
                return {
                    token
                }
    }

}