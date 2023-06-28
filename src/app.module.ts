import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'forpromotional.homelinux.com',
      port: 5432,
      username: 'postgres',
      password: '011203ADMGS',
      database: 'dbforpromotional',
      synchronize: false,
      entities: ['dist/**/*.entity{.ts,.js}'],
    }),
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
