import { SortOrder } from "../../util/SortOrder";

export type MsgOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  msgCode?: SortOrder;
  msgName?: SortOrder;
  updatedAt?: SortOrder;
};
