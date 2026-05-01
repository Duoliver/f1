export function getTyreManufacturerClassName(tyreManufacturer: string) {
  if (YELLOW_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-yellow border-full-black text-full-black';
  }
  if (RED_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-red border-white text-white';
  }
  if (BLUE_TYRES.includes(tyreManufacturer)) {
    return 'bg-tyre-blue border-white text-white';
  }
}

const YELLOW_TYRES = ['continental', 'dunlop', 'pirelli'];
const RED_TYRES = ['avon', 'bridgestone', 'firestone'];
const BLUE_TYRES = ['englebert', 'goodyear', 'michelin'];
