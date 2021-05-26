import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MsgServiceBase } from "./base/msg.service.base";

@Injectable()
export class MsgService extends MsgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
