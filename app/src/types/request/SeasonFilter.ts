import type Season from '../response/Season';
import type Filter from './Filter';

export default interface SeasonFilter extends Partial<Season>, Filter<Season> {}
