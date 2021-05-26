import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MsgService } from "./msg.service";
import { MsgControllerBase } from "./base/msg.controller.base";

@swagger.ApiBasicAuth()
@swagger.ApiTags("msgs")
@common.Controller("msgs")
export class MsgController extends MsgControllerBase {
  constructor(
    protected readonly service: MsgService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
