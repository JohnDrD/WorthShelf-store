import { JwtModule } from "@nestjs/jwt";
import { DynamoConnection } from "./DynamoDBConnection.db";
import { JwtAuthGuard } from "../Guards/jwtGuard.guard";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT|| 'defaultSecret',
      signOptions: { expiresIn: '1h' },
    })
  ],
  providers:[JwtAuthGuard, DynamoConnection],
  exports: [JwtModule,JwtAuthGuard],
})
export class SharedModule {}