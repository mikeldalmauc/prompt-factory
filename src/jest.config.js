module.exports = {
    // Setup test environment
    testEnvironment: 'node', // or 'jsdom' for browser-like environment
  
    // Transform settings
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript and JSX files with babel-jest
    },
  
    // Module file extensions
    moduleFileExtensions: ['js', 'json', 'jsx'],
  
    // Module name mapper for assets and aliases
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
      '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image and other asset files
      '^@components/(.*)$': '<rootDir>/src/components/$1', // Alias for components
      '^@utils/(.*)$': '<rootDir>/src/utils/$1', // Alias for utilities
    },
  
    // Setup files to run before test suites
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  
    // Test path patterns
    testMatch: [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx}',
      '<rootDir>/src/**/?(*.)+(spec|test).{js,jsx}',
    ],
  
    // Test coverage settings
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
  };