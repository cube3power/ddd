import { PrismaService } from "nestjs-prisma";
import { Prisma, Msg } from "@prisma/client";

export class MsgServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MsgFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgFindManyArgs>
  ): Promise<number> {
    return this.prisma.msg.count(args);
  }

  async findMany<T extends Prisma.MsgFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgFindManyArgs>
  ): Promise<Msg[]> {
    return this.prisma.msg.findMany(args);
  }
  async findOne<T extends Prisma.MsgFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgFindUniqueArgs>
  ): Promise<Msg | null> {
    return this.prisma.msg.findUnique(args);
  }
  async create<T extends Prisma.MsgCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgCreateArgs>
  ): Promise<Msg> {
    return this.prisma.msg.create<T>(args);
  }
  async update<T extends Prisma.MsgUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgUpdateArgs>
  ): Promise<Msg> {
    return this.prisma.msg.update<T>(args);
  }
  async delete<T extends Prisma.MsgDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MsgDeleteArgs>
  ): Promise<Msg> {
    return this.prisma.msg.delete(args);
  }
}
