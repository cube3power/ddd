import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HzWaterMeterWhereInput } from "./HzWaterMeterWhereInput";
import { Type } from "class-transformer";
import { HzWaterMeterOrderByInput } from "./HzWaterMeterOrderByInput";

@ArgsType()
class HzWaterMeterFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HzWaterMeterWhereInput,
  })
  @Field(() => HzWaterMeterWhereInput, { nullable: true })
  @Type(() => HzWaterMeterWhereInput)
  where?: HzWaterMeterWhereInput;

  @ApiProperty({
    required: false,
    type: HzWaterMeterOrderByInput,
  })
  @Field(() => HzWaterMeterOrderByInput, { nullable: true })
  @Type(() => HzWaterMeterOrderByInput)
  orderBy?: HzWaterMeterOrderByInput;

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

export { HzWaterMeterFindManyArgs };
