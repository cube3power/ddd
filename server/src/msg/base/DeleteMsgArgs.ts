import { ArgsType, Field } from "@nestjs/graphql";
import { MsgWhereUniqueInput } from "./MsgWhereUniqueInput";

@ArgsType()
class DeleteMsgArgs {
  @Field(() => MsgWhereUniqueInput, { nullable: false })
  where!: MsgWhereUniqueInput;
}

export { DeleteMsgArgs };
