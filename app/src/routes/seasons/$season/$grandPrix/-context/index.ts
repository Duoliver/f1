import { createContext } from 'react';
import type SeasonGrandPrixContextProps from './types';

const SeasonGrandPrixContext =
  createContext<SeasonGrandPrixContextProps | null>(null);

export default SeasonGrandPrixContext;
