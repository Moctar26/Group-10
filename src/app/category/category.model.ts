

import { Courses } from './courses.model';

export class Category{
  constructor(
    public id?: string,
    public title?: string,

    public imageUrl?: string,
    public description?: string,
    public courses?: Courses[]

    ){}
}
