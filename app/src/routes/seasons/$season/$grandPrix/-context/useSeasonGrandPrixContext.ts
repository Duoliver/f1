import { useContext } from 'react';
import SeasonGrandPrixContext from '.';

export default function useSeasonGrandPrixContext() {
  const data = useContext(SeasonGrandPrixContext);

  if (!data) {
    throw new Error(
      'Component must be used inside of the SeasonGrandPrixContext provider'
    );
  }

  return data;
}
