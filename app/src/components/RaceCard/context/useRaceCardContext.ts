import { useContext } from 'react';
import RaceCardContext from '.';

export default function useRaceCardContext() {
  const contextValue = useContext(RaceCardContext);

  if (!contextValue)
    throw new Error(
      'Component must be used inside of the RaceCardContext provider.'
    );

  return contextValue;
}
