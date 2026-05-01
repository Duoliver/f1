import type ComparableDriverResult from '../common/ComparableDriverResult';

export default interface QualifyingDriverResult extends ComparableDriverResult {
  laps: number;
  q1: null;
  q1Millis: null;
  q2: null;
  q2Millis: null;
  q3: null;
  q3Millis: null;
}
