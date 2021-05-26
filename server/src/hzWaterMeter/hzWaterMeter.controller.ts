import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HzWaterMeterService } from "./hzWaterMeter.service";
import { HzWaterMeterControllerBase } from "./base/hzWaterMeter.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("hz-water-meters")
@common.Controller("hz-water-meters")
export class HzWaterMeterController extends HzWaterMeterControllerBase {
  constructor(
    protected readonly service: HzWaterMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
