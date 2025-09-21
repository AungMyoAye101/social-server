
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {

    preset: "ts-jest",
    testEnvironment: "node",
    testMatch: ['**/test/**/*.test.ts', '**/?(*.)+(spec|test).ts'],
    setupFilesAfterEnv: ['<rootDir>/test/setup.ts']

}

export default config