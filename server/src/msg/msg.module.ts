import { Module } from "@nestjs/common";
import { MsgModuleBase } from "./base/msg.module.base";
import { MsgService } from "./msg.service";
import { MsgController } from "./msg.controller";
import { MsgResolver } from "./msg.resolver";

@Module({
  imports: [MsgModuleBase],
  controllers: [MsgController],
  providers: [MsgService, MsgResolver],
  exports: [MsgService],
})
export class MsgModule {}
