import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // introspection: true,
      sortSchema: true,
      driver: ApolloDriver,
      // // debug: false,
      // typePaths: ['./graphql/schema/*.graphqls'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      //   outputAs: 'class',
      // },
      // playground: false,
    }),
    AuthorsModule,
  ],
})
export class AppModule {}
