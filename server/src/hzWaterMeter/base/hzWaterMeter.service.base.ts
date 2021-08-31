import { PrismaService } from "nestjs-prisma";
import { Prisma, HzWaterMeter } from "@prisma/client";

export class HzWaterMeterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.HzWaterMeterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterFindManyArgs>
  ): Promise<number> {
    return this.prisma.hzWaterMeter.count(args);
  }

  async findMany<T extends Prisma.HzWaterMeterFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterFindManyArgs>
  ): Promise<HzWaterMeter[]> {
    return this.prisma.hzWaterMeter.findMany(args);
  }
  async findOne<T extends Prisma.HzWaterMeterFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterFindUniqueArgs>
  ): Promise<HzWaterMeter | null> {
    return this.prisma.hzWaterMeter.findUnique(args);
  }
  async create<T extends Prisma.HzWaterMeterCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterCreateArgs>
  ): Promise<HzWaterMeter> {
    return this.prisma.hzWaterMeter.create<T>(args);
  }
  async update<T extends Prisma.HzWaterMeterUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterUpdateArgs>
  ): Promise<HzWaterMeter> {
    return this.prisma.hzWaterMeter.update<T>(args);
  }
  async delete<T extends Prisma.HzWaterMeterDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.HzWaterMeterDeleteArgs>
  ): Promise<HzWaterMeter> {
    return this.prisma.hzWaterMeter.delete(args);
  }
}
