const path = require('path');

const yarnOrNpm = require('../lib');
const mock = path.resolve(__dirname, './mocks/yarn-lockfile');

describe('detecting Yarn lockfile', () => {
  const cwd = process.cwd();

  beforeEach(() => {
    process.chdir(mock);
  });

  afterEach(() => {
    process.chdir(cwd);
  });

  it('properly detects Yarn as the client', () => {
    expect(yarnOrNpm()).toEqual('yarn');
  });
});
