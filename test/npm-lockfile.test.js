const path = require('path');

const yarnOrNpm = require('../lib');
const mock = path.resolve(__dirname, './mocks/npm-lockfile');

describe('detecting npm lockfile', () => {
  const cwd = process.cwd();

  beforeEach(() => {
    process.chdir(mock);
  });

  afterEach(() => {
    process.chdir(cwd);
  });

  it('properly detects npm as the client', () => {
    expect(yarnOrNpm()).toEqual('npm');
  });
});
