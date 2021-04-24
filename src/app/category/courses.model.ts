import { Chapters } from './chapters.model';

export class Courses{
  constructor(
    public id?: string,
    public title?: string,
    public description?: string,
    public imageUrl?: string,
    public chapters?: Chapters[]

  ){}
}
