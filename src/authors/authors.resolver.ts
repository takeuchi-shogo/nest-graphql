// import { Query } from "@nestjs/common";
import { Args, Query, Int, Resolver } from '@nestjs/graphql';
import { Author } from './models/author.models';
import { AuthorsService } from './authors.service';

@Resolver()
export class AuthorResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }
}
