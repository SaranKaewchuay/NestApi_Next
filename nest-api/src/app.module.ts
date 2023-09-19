import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttractionsModule } from './attractions/attractions.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AttractionsModule,
    MongooseModule.forRoot('mongodb+srv://root:1234@cluster0.l78dbvc.mongodb.net/attractions')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
