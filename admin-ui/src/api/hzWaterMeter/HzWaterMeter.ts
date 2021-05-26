export type HzWaterMeter = {
  createdAt: Date;
  id: string;
  installAddress: string | null;
  installDate: Date | null;
  isTotal: boolean | null;
  lat: number | null;
  lon: number | null;
  manufacture: string | null;
  meterId: string | null;
  meterName: string | null;
  notes: string | null;
  updatedAt: Date;
};
