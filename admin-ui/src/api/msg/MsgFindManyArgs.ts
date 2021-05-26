import { MsgWhereInput } from "./MsgWhereInput";
import { MsgOrderByInput } from "./MsgOrderByInput";

export type MsgFindManyArgs = {
  where?: MsgWhereInput;
  orderBy?: MsgOrderByInput;
  skip?: number;
  take?: number;
};
