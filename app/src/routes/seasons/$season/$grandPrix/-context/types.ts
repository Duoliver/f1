import type RaceDriverFullResult from '~/types/page/seasons/$season/$grandPrix/RaceDriverFullResult';
import type Race from '~/types/response/Race';

export default interface SeasonGrandPrixContextProps {
  race: Race | undefined;
  raceResults: RaceDriverFullResult[];
}
