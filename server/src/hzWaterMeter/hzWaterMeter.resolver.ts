import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlBasicAuthGuard from "../auth/gqlBasicAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HzWaterMeterResolverBase } from "./base/hzWaterMeter.resolver.base";
import { HzWaterMeter } from "./base/HzWaterMeter";
import { HzWaterMeterService } from "./hzWaterMeter.service";

@graphql.Resolver(() => HzWaterMeter)
@common.UseGuards(gqlBasicAuthGuard.GqlBasicAuthGuard, gqlACGuard.GqlACGuard)
export class HzWaterMeterResolver extends HzWaterMeterResolverBase {
  constructor(
    protected readonly service: HzWaterMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
