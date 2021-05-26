import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type HzWaterMeterWhereInput = {
  id?: StringFilter;
  installAddress?: StringNullableFilter;
  installDate?: DateTimeNullableFilter;
  isTotal?: BooleanNullableFilter;
  lat?: FloatNullableFilter;
  lon?: FloatNullableFilter;
  manufacture?: StringNullableFilter;
  meterId?: StringNullableFilter;
  meterName?: StringNullableFilter;
  notes?: StringNullableFilter;
};
