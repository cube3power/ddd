import { SortOrder } from "../../util/SortOrder";

export type HzWaterMeterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  installAddress?: SortOrder;
  installDate?: SortOrder;
  isTotal?: SortOrder;
  lastUpdateTime?: SortOrder;
  lat?: SortOrder;
  lon?: SortOrder;
  manufacture?: SortOrder;
  meterId?: SortOrder;
  meterName?: SortOrder;
  notes?: SortOrder;
  pressure?: SortOrder;
  totalValue?: SortOrder;
  updatedAt?: SortOrder;
};
