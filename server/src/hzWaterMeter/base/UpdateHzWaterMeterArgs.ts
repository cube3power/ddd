import { ArgsType, Field } from "@nestjs/graphql";
import { HzWaterMeterWhereUniqueInput } from "./HzWaterMeterWhereUniqueInput";
import { HzWaterMeterUpdateInput } from "./HzWaterMeterUpdateInput";

@ArgsType()
class UpdateHzWaterMeterArgs {
  @Field(() => HzWaterMeterWhereUniqueInput, { nullable: false })
  where!: HzWaterMeterWhereUniqueInput;
  @Field(() => HzWaterMeterUpdateInput, { nullable: false })
  data!: HzWaterMeterUpdateInput;
}

export { UpdateHzWaterMeterArgs };
