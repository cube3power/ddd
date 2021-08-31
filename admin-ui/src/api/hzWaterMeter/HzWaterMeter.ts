export type HzWaterMeter = {
  createdAt: Date;
  id: string;
  installAddress: string | null;
  installDate: Date | null;
  isTotal: boolean | null;
  lastUpdateTime: Date | null;
  lat: number | null;
  lon: number | null;
  manufacture: string | null;
  meterId: string | null;
  meterName: string | null;
  notes: string | null;
  pressure: number | null;
  totalValue: number | null;
  updatedAt: Date;
};
