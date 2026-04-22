import { createContext } from 'react';
import type RaceCardContextProps from './types';

const RaceCardContext = createContext<RaceCardContextProps | null>(null);

export default RaceCardContext;
