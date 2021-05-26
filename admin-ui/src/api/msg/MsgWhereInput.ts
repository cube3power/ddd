import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MsgWhereInput = {
  id?: StringFilter;
  msgCode?: StringNullableFilter;
  msgName?: StringNullableFilter;
};
