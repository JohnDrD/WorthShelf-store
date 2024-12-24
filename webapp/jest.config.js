export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.svg$": "jest-transformer-svg"
    },
    moduleNameMapper: {
      "^.+\\.(css|scss)$": "identity-obj-proxy",
      '^(.*).svg\\?react$': '$1.svg',
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
    coveragePathIgnorePatterns:[
      '\\.svg$'
    ]
  };
  