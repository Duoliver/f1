import type Race from '../response/Race';
import type Filter from './Filter';

export default interface RaceFilter extends Partial<Race>, Filter<Race> {}
