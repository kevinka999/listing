export default {
  preset: "ts-jest",
  testEnvironment: 'jsdom',
  coverageProvider: "v8",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {"^.+\\.ts?$": "ts-jest"},
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  }
};
