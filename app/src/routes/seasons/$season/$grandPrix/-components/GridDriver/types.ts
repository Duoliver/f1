export default interface GridDriverProps {
  position: number | null;
  driverName: string;
  carNumber: string;
  constructor: string;
  engineManufacturer: string;
  tyreManufacturer: string;
}

export interface TyreManufacturerIndicatorProps {
  tyreManufacturer: string;
}
