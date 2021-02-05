// eslint-disable-next-line @typescript-eslint/no-var-requires
const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)', '../src/components/**/*.stories.@(js|jsx|ts|tsx)', '../src/components/**/*.stories.mdx']
);

module.exports = rootMain;
