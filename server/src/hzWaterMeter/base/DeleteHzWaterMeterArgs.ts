import { ArgsType, Field } from "@nestjs/graphql";
import { HzWaterMeterWhereUniqueInput } from "./HzWaterMeterWhereUniqueInput";

@ArgsType()
class DeleteHzWaterMeterArgs {
  @Field(() => HzWaterMeterWhereUniqueInput, { nullable: false })
  where!: HzWaterMeterWhereUniqueInput;
}

export { DeleteHzWaterMeterArgs };
