import RaceCardHeader from './components/RaceCardHeader';
import type RaceCardProps from './types';
import RaceCardContext from './context';
import RaceCardFooter from './components/RaceCardFooter';

export default function RaceCard({ race, TitleWrapper }: RaceCardProps) {
  return (
    <RaceCardContext.Provider value={{ race, TitleWrapper }}>
      <section
        className="flex flex-col p-4 justify-between border border-white"
        data-testid={`race-card-${race.round}`}
      >
        <RaceCardHeader />
        <RaceCardFooter />
      </section>
    </RaceCardContext.Provider>
  );
}
