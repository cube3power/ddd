import { ArgsType, Field } from "@nestjs/graphql";
import { MsgWhereUniqueInput } from "./MsgWhereUniqueInput";

@ArgsType()
class MsgFindUniqueArgs {
  @Field(() => MsgWhereUniqueInput, { nullable: false })
  where!: MsgWhereUniqueInput;
}

export { MsgFindUniqueArgs };
