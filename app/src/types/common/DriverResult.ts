export default interface DriverResult {
  positionDisplayOrder: number;
  positionNumber: number | null;
  positionText: string;
  driverNumber: string;
  driverId: string;
  constructorId: string;
  engineManufacturerId: string;
  tyreManufacturerId: string;
  time: string | null;
  timeMillis: number | null;
}
