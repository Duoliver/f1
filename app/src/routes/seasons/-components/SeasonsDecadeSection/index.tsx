import SeasonLink from '../SeasonLink';
import type SeasonsDecadeSectionProps from './types';

export default function SeasonsDecadeSection({
  decade,
  yearsList,
}: SeasonsDecadeSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="lowercase">{decade}</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
        {yearsList.map(({ year }) => (
          <SeasonLink year={year} key={year} />
        ))}
      </div>
      <hr />
    </div>
  );
}
