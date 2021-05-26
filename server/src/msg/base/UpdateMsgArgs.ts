import { ArgsType, Field } from "@nestjs/graphql";
import { MsgWhereUniqueInput } from "./MsgWhereUniqueInput";
import { MsgUpdateInput } from "./MsgUpdateInput";

@ArgsType()
class UpdateMsgArgs {
  @Field(() => MsgWhereUniqueInput, { nullable: false })
  where!: MsgWhereUniqueInput;
  @Field(() => MsgUpdateInput, { nullable: false })
  data!: MsgUpdateInput;
}

export { UpdateMsgArgs };
