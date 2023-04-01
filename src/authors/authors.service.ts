import { Injectable } from '@nestjs/common';
import { Author } from './models/author.models';

@Injectable()
export class AuthorsService {
  findOneById(id: number): Author {
    const result = { id: id };
    return result;
  }
}
