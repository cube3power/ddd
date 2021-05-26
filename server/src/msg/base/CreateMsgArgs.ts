import { ArgsType, Field } from "@nestjs/graphql";
import { MsgCreateInput } from "./MsgCreateInput";

@ArgsType()
class CreateMsgArgs {
  @Field(() => MsgCreateInput, { nullable: false })
  data!: MsgCreateInput;
}

export { CreateMsgArgs };
