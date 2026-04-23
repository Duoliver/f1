import { render, screen } from '~/test-utils';
import { describe, expect, it } from 'vitest';
import GridDriver from '.';

const driverOne = {
  position: 1,
  driverName: 'driver-one',
  carNumber: '44',
  constructor: 'mercedes',
  engineManufacturer: 'mercedes',
  tyreManufacturer: 'pirelli',
};

const driverTwo = {
  ...driverOne,
  position: 2,
  driverName: 'driver-two',
  carNumber: '3',
  constructor: 'red-bull',
  engineManufacturer: 'renault',
};

const driverPositionNull = {
  ...driverOne,
  position: null,
};

describe('GridDriver', () => {
  it('should display the correct position number 1', () => {
    render(<GridDriver {...driverOne} />);

    const positionElement = screen.getByTestId('grid-driver-position');

    expect(positionElement).toHaveTextContent(/1/i);
  });
  it('should display the correct position number 2', () => {
    render(<GridDriver {...driverTwo} />);

    const positionElement = screen.getByTestId('grid-driver-position');

    expect(positionElement).toHaveTextContent(/2/i);
  });
  it('should display a hyphen character as the position number when no position number is defined', () => {
    render(<GridDriver {...driverPositionNull} />);

    const positionElement = screen.getByTestId('grid-driver-position');

    expect(positionElement).toHaveTextContent(/-/i);
  });
  it('should display the correct driver name', () => {
    render(<GridDriver {...driverOne} />);

    const element = screen.getByTestId('grid-driver-name');

    expect(element).toHaveTextContent(/driver one/i);
  });
  it('should display the correct car number 44', () => {
    render(<GridDriver {...driverOne} />);

    const element = screen.getByTestId('grid-driver-number');

    expect(element).toHaveTextContent(/44/i);
  });
  it('should display the correct car number 3', () => {
    render(<GridDriver {...driverTwo} />);

    const element = screen.getByTestId('grid-driver-number');

    expect(element).toHaveTextContent(/3/i);
  });
  it("should display the driver's car constructor without the engine constructor if they're the same", () => {
    render(<GridDriver {...driverOne} />);

    const element = screen.getByTestId('grid-driver-constructor');

    expect(element).toHaveTextContent(/mercedes/i);
  });
  it("should display the driver's car constructor with the engine constructor if they're not the same", () => {
    render(<GridDriver {...driverTwo} />);

    const element = screen.getByTestId('grid-driver-constructor');

    expect(element).toHaveTextContent(/red bull-renault/i);
  });
  it("should display the correct driver's car tyre manufacturer", () => {
    render(<GridDriver {...driverOne} />);

    const element = screen.getByTestId('grid-driver-tyre-manufacturer');

    expect(element).toHaveTextContent(/p/i);
    expect(element).toHaveProperty('title', 'Pirelli');
  });
});
