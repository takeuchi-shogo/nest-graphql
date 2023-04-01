import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorResolver } from './authors.resolver';

@Module({
  providers: [AuthorsService, AuthorResolver],
})
export class AuthorsModule {}
