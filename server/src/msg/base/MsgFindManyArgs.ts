import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MsgWhereInput } from "./MsgWhereInput";
import { Type } from "class-transformer";
import { MsgOrderByInput } from "./MsgOrderByInput";

@ArgsType()
class MsgFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MsgWhereInput,
  })
  @Field(() => MsgWhereInput, { nullable: true })
  @Type(() => MsgWhereInput)
  where?: MsgWhereInput;

  @ApiProperty({
    required: false,
    type: MsgOrderByInput,
  })
  @Field(() => MsgOrderByInput, { nullable: true })
  @Type(() => MsgOrderByInput)
  orderBy?: MsgOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MsgFindManyArgs };
