import { Msg as TMsg } from "../api/msg/Msg";

export const MSG_TITLE_FIELD = "id";

export const MsgTitle = (record: TMsg) => {
  return record.id;
};
