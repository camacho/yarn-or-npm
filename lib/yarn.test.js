jest.mock('cross-spawn');

const { sync: spawn } = require('cross-spawn');

const cache = require('./cache');
const { hasYarn } = require('./yarn');

describe('determine if Yarn is installed', () => {
  afterEach(() => {
    spawn.mockClear();
    cache.clearCache();
  });

  it('uses the cache when available', () => {
    expect(cache.cachedHasYarn).toBeUndefined();

    hasYarn();
    expect(spawn).toHaveBeenCalled();
    expect(cache.cachedHasYarn).not.toBeUndefined();

    hasYarn();
    expect(spawn).toBeCalledTimes(1);
    expect(cache.cachedHasYarn).not.toBeUndefined();
  });

  it('handles a Yarn version check failing', () => {
    spawn.mockImplementation(() => {
      throw new Error('Yarn not found (or something)');
    });

    expect(hasYarn()).toEqual(false);
  });

  it('uses cross-spawn to check for a version of yarn', () => {
    hasYarn();
    expect(spawn).toHaveBeenCalledWith('yarn', ['--version']);
  });
});
