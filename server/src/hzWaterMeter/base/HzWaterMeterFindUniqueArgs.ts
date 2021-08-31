import { ArgsType, Field } from "@nestjs/graphql";
import { HzWaterMeterWhereUniqueInput } from "./HzWaterMeterWhereUniqueInput";

@ArgsType()
class HzWaterMeterFindUniqueArgs {
  @Field(() => HzWaterMeterWhereUniqueInput, { nullable: false })
  where!: HzWaterMeterWhereUniqueInput;
}

export { HzWaterMeterFindUniqueArgs };
