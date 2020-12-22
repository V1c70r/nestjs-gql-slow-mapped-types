import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import './mapped-type-test';

@Module({
  imports: [
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
})
export class AppModule {}
