export default interface DriverResult {
  positionDisplayOrder: number;
  positionNumber: number;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  engineManufacturerId: string;
  tyreManufacturerId: string;
  time: string; // 1:25.226
  timeMillis: number;
  gap: string;
  gapMillis: number;
  interval: string;
  intervalMillis: number;
  laps: number;
}
