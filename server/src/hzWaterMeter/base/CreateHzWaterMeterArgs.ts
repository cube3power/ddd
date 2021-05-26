import { ArgsType, Field } from "@nestjs/graphql";
import { HzWaterMeterCreateInput } from "./HzWaterMeterCreateInput";

@ArgsType()
class CreateHzWaterMeterArgs {
  @Field(() => HzWaterMeterCreateInput, { nullable: false })
  data!: HzWaterMeterCreateInput;
}

export { CreateHzWaterMeterArgs };
