export default interface DriverResult {
  positionDisplayOrder: number;
  positionNumber: number;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  engineManufacturerId: string;
  tyreManufacturerId: string;
  time: string | null;
  timeMillis: number | null;
  gap: string | null;
  gapMillis: number | null;
  interval: string | null;
  intervalMillis: number | null;
  laps: number;
}
