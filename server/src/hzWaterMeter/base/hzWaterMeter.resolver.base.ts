import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import * as gqlDefaultAuthGuard from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateHzWaterMeterArgs } from "./CreateHzWaterMeterArgs";
import { UpdateHzWaterMeterArgs } from "./UpdateHzWaterMeterArgs";
import { DeleteHzWaterMeterArgs } from "./DeleteHzWaterMeterArgs";
import { HzWaterMeterFindManyArgs } from "./HzWaterMeterFindManyArgs";
import { HzWaterMeterFindUniqueArgs } from "./HzWaterMeterFindUniqueArgs";
import { HzWaterMeter } from "./HzWaterMeter";
import { HzWaterMeterService } from "../hzWaterMeter.service";

@graphql.Resolver(() => HzWaterMeter)
@common.UseGuards(
  gqlDefaultAuthGuard.GqlDefaultAuthGuard,
  gqlACGuard.GqlACGuard
)
export class HzWaterMeterResolverBase {
  constructor(
    protected readonly service: HzWaterMeterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "read",
    possession: "any",
  })
  async _hzWaterMetersMeta(
    @graphql.Args() args: HzWaterMeterFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [HzWaterMeter])
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "read",
    possession: "any",
  })
  async hzWaterMeters(
    @graphql.Args() args: HzWaterMeterFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => HzWaterMeter, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "read",
    possession: "own",
  })
  async hzWaterMeter(
    @graphql.Args() args: HzWaterMeterFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "HzWaterMeter",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => HzWaterMeter)
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "create",
    possession: "any",
  })
  async createHzWaterMeter(
    @graphql.Args() args: CreateHzWaterMeterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"HzWaterMeter"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => HzWaterMeter)
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "update",
    possession: "any",
  })
  async updateHzWaterMeter(
    @graphql.Args() args: UpdateHzWaterMeterArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"HzWaterMeter"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => HzWaterMeter)
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "delete",
    possession: "any",
  })
  async deleteHzWaterMeter(
    @graphql.Args() args: DeleteHzWaterMeterArgs
  ): Promise<HzWaterMeter | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
