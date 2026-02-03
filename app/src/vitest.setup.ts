import '@testing-library/jest-dom/vitest';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);

/*
FAIL  src/routes/-tests/seasons/index.spec.tsx [ src/routes/-tests/seasons/index.spec.tsx ]
Error: Cannot find module '/home/gladuos/projetos/f1/app/src/vitest-setup.ts'

*/
// see https://vitest.dev/config/setupfiles
