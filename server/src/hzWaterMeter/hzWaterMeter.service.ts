import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HzWaterMeterServiceBase } from "./base/hzWaterMeter.service.base";

@Injectable()
export class HzWaterMeterService extends HzWaterMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
