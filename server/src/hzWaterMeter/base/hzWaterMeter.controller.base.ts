import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { HzWaterMeterService } from "../hzWaterMeter.service";
import { HzWaterMeterCreateInput } from "./HzWaterMeterCreateInput";
import { HzWaterMeterWhereInput } from "./HzWaterMeterWhereInput";
import { HzWaterMeterWhereUniqueInput } from "./HzWaterMeterWhereUniqueInput";
import { HzWaterMeterFindManyArgs } from "./HzWaterMeterFindManyArgs";
import { HzWaterMeterUpdateInput } from "./HzWaterMeterUpdateInput";
import { HzWaterMeter } from "./HzWaterMeter";

export class HzWaterMeterControllerBase {
  constructor(
    protected readonly service: HzWaterMeterService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: HzWaterMeter })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: HzWaterMeterCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"HzWaterMeter"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        installAddress: true,
        installDate: true,
        isTotal: true,
        lastUpdateTime: true,
        lat: true,
        lon: true,
        manufacture: true,
        meterId: true,
        meterName: true,
        notes: true,
        pressure: true,
        totalValue: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [HzWaterMeter] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => HzWaterMeterFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter[]> {
    const args = plainToClass(HzWaterMeterFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        installAddress: true,
        installDate: true,
        isTotal: true,
        lastUpdateTime: true,
        lat: true,
        lon: true,
        manufacture: true,
        meterId: true,
        meterName: true,
        notes: true,
        pressure: true,
        totalValue: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: HzWaterMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: HzWaterMeterWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "HzWaterMeter",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        installAddress: true,
        installDate: true,
        isTotal: true,
        lastUpdateTime: true,
        lat: true,
        lon: true,
        manufacture: true,
        meterId: true,
        meterName: true,
        notes: true,
        pressure: true,
        totalValue: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: HzWaterMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: HzWaterMeterWhereUniqueInput,
    @common.Body()
    data: HzWaterMeterUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<HzWaterMeter | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "HzWaterMeter",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"HzWaterMeter"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          installAddress: true,
          installDate: true,
          isTotal: true,
          lastUpdateTime: true,
          lat: true,
          lon: true,
          manufacture: true,
          meterId: true,
          meterName: true,
          notes: true,
          pressure: true,
          totalValue: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "HzWaterMeter",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: HzWaterMeter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: HzWaterMeterWhereUniqueInput
  ): Promise<HzWaterMeter | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          installAddress: true,
          installDate: true,
          isTotal: true,
          lastUpdateTime: true,
          lat: true,
          lon: true,
          manufacture: true,
          meterId: true,
          meterName: true,
          notes: true,
          pressure: true,
          totalValue: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
