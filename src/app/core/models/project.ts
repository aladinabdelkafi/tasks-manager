import { User } from './user';
export class Project {
    constructor(
    public title?: string,
    public description?: string,
    public manager?: User,
    public developers?: User[]
    ) {}
}
