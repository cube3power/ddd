import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HzWaterMeterResolverBase } from "./base/hzWaterMeter.resolver.base";
import { HzWaterMeter } from "./base/HzWaterMeter";
import { HzWaterMeterService } from "./hzWaterMeter.service";

@graphql.Resolver(() => HzWaterMeter)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class HzWaterMeterResolver extends HzWaterMeterResolverBase {
  constructor(
    protected readonly service: HzWaterMeterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
