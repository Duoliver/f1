import { render, screen } from '~/test-utils';
import { describe, expect, it } from 'vitest';
import RaceCard from '.';
import { raceTwo, raceOne, raceThree, raceFive } from '~/mocks/races';

describe('RaceCard', () => {
  it('should display the correct race round of race 1', () => {
    render(<RaceCard race={raceOne} />);

    const roundElement = screen.getByTestId('race-card-round');

    expect(roundElement).toHaveTextContent(/round 1/i);
  });

  it('should display the correct race round of race 2', () => {
    render(<RaceCard race={raceTwo} />);

    const roundElement = screen.getByTestId('race-card-round');

    expect(roundElement).toHaveTextContent(/round 2/i);
  });

  it('should display a single digit day date correctly', () => {
    render(<RaceCard race={raceOne} />);

    const dateElement = screen.getByTestId('race-card-date');

    expect(dateElement).toHaveTextContent(/6 april/i);
  });

  it('should display a double digit day date correctly', () => {
    render(<RaceCard race={raceTwo} />);

    const dateElement = screen.getByTestId('race-card-date');

    expect(dateElement).toHaveTextContent(/30 april/i);
  });

  it('should display the grand prix name correctly', () => {
    render(<RaceCard race={raceOne} />);

    const gpElement = screen.getByTestId('race-card-gp');

    expect(gpElement).toHaveTextContent(/italy/i);
  });

  it('should display the compound noun grand prix name correctly', () => {
    render(<RaceCard race={raceTwo} />);

    const gpElement = screen.getByTestId('race-card-gp');

    expect(gpElement).toHaveTextContent(/great britain/i);
  });

  it('should display the circuit name correctly', () => {
    render(<RaceCard race={raceOne} />);

    const circuitElement = screen.getByTestId('race-card-circuit');

    expect(circuitElement).toHaveTextContent(/monza/i);
  });

  it('should display the compound noun circuit name correctly', () => {
    render(<RaceCard race={raceTwo} />);

    const circuitElement = screen.getByTestId('race-card-circuit');

    expect(circuitElement).toHaveTextContent(/brands hatch/i);
  });

  it('should display the name of the first three race finishers', () => {
    render(<RaceCard race={raceOne} />);

    const firstDriverNameElement = screen.getByTestId(
      'race-card-driver-1-name'
    );
    const secondDriverNameElement = screen.getByTestId(
      'race-card-driver-2-name'
    );
    const thirdDriverNameElement = screen.getByTestId(
      'race-card-driver-3-name'
    );

    expect(firstDriverNameElement).toHaveTextContent(/driver one/i);
    expect(secondDriverNameElement).toHaveTextContent(/driver two/i);
    expect(thirdDriverNameElement).toHaveTextContent(/driver three/i);
  });

  it('should display the race time of the winner driver', () => {
    render(<RaceCard race={raceOne} />);

    const raceTimeElement = screen.getByTestId(
      'race-card-driver-1-result-time'
    );

    expect(raceTimeElement).toHaveTextContent(/1:30:00.000/i);
  });

  it('should display the gap of both second and third drivers to the first', () => {
    render(<RaceCard race={raceOne} />);

    const secondDriverRaceTimeElement = screen.getByTestId(
      'race-card-driver-2-result-time'
    );
    const thirdDriverRaceTimeElement = screen.getByTestId(
      'race-card-driver-3-result-time'
    );

    expect(secondDriverRaceTimeElement).toHaveTextContent(/\+10.000/i);
    expect(thirdDriverRaceTimeElement).toHaveTextContent(/\+20.000/i);
  });

  it('should display the reason of retirement of a podium finisher that has not completed their final lap', () => {
    render(<RaceCard race={raceTwo} />);

    const thirdDriverRaceTimeElement = screen.getByTestId(
      'race-card-driver-3-result-time'
    );

    expect(thirdDriverRaceTimeElement).toHaveTextContent(/out of fuel/i);
  });

  it('should display a hyphen character when no gap or reason retired is informed for a driver which has not won the race', () => {
    render(<RaceCard race={raceThree} />);

    const thirdDriverRaceTimeElement = screen.getByTestId(
      'race-card-driver-3-result-time'
    );

    expect(thirdDriverRaceTimeElement).toHaveTextContent(/-/i);
  });

  it('should render an upcoming race, which has no results', () => {
    render(<RaceCard race={raceFive} />);

    const firstDriverRaceTimeElement =
      screen.queryByTestId(/race-card-driver-1/);
    const secondDriverRaceTimeElement =
      screen.queryByTestId(/race-card-driver-2/);
    const thirdDriverRaceTimeElement =
      screen.queryByTestId(/race-card-driver-3/);

    expect(firstDriverRaceTimeElement).not.toBeInTheDocument();
    expect(secondDriverRaceTimeElement).not.toBeInTheDocument();
    expect(thirdDriverRaceTimeElement).not.toBeInTheDocument();
  });

  it('should display the race date in the card footer if it has not happened yet', () => {
    render(<RaceCard race={raceFive} />);

    const footerDateElement = screen.queryByRole('heading', {
      level: 4,
    });

    expect(footerDateElement).toHaveTextContent(/5 june/i);
  });

  it('should display \"upcoming event\" in the header date field if it has not happened yet', () => {
    render(<RaceCard race={raceFive} />);

    const dateElement = screen.getByTestId('race-card-date');

    expect(dateElement).toHaveTextContent(/upcoming event/i);
  });
});
