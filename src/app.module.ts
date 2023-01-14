import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.DB_URL || 'mongodb://adminyurii1:adminpass12@localhost:27017/nest1', {
        directConnection: true,
        tls: true,
        tlsAllowInvalidHostnames: true,
        retryWrites: false,
        tlsCAFile: path.join(__dirname, '../rds-combined-ca-bundle.pem')
      }),
    CatModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
