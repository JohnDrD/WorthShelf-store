import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './context/stock/Inf/Stock.module';
import { CostumerModule } from './context/costumers/inf/costumer.module';
import { TransactionModule } from './context/transaction/inf/transaction.module';
import { DeliveryModule } from './context/delivery/inf/delivery.module';

@Module({
  imports: [StockModule,CostumerModule, TransactionModule,DeliveryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
