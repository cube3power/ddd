import { Msg as TMsg } from "../api/msg/Msg";

export const MSG_TITLE_FIELD = "msgName";

export const MsgTitle = (record: TMsg) => {
  return record.msgName;
};
