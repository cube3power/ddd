import { HzWaterMeter as THzWaterMeter } from "../api/hzWaterMeter/HzWaterMeter";

export const HZWATERMETER_TITLE_FIELD = "meterName";

export const HzWaterMeterTitle = (record: THzWaterMeter) => {
  return record.meterName;
};
