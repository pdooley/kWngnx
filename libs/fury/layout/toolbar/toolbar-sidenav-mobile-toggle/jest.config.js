module.exports = {
  displayName: 'fury-layout-toolbar-sidenav-mobile-toggle',
  preset: '../../../../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    }
  },
  transform: {
    '^.+\\.[tj]sx?$':  'ts-jest'
  },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/fury/layout/toolbar/toolbar-sidenav-mobile-toggle'
};
