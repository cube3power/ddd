import { Module } from "@nestjs/common";
import { HzWaterMeterModuleBase } from "./base/hzWaterMeter.module.base";
import { HzWaterMeterService } from "./hzWaterMeter.service";
import { HzWaterMeterController } from "./hzWaterMeter.controller";
import { HzWaterMeterResolver } from "./hzWaterMeter.resolver";

@Module({
  imports: [HzWaterMeterModuleBase],
  controllers: [HzWaterMeterController],
  providers: [HzWaterMeterService, HzWaterMeterResolver],
  exports: [HzWaterMeterService],
})
export class HzWaterMeterModule {}
