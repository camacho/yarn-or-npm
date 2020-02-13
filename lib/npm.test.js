jest.mock('cross-spawn');

const { sync: spawn } = require('cross-spawn');

const cache = require('./cache');
const { hasNpm } = require('./npm');

describe('determine if npm is installed', () => {
  afterEach(() => {
    spawn.mockClear();
    cache.clearCache();
  });

  it('uses the cache when available', () => {
    expect(cache.cachedHasNPM).toBeUndefined();

    hasNpm();
    expect(spawn).toHaveBeenCalled();
    expect(cache.cachedHasNPM).not.toBeUndefined();

    hasNpm();
    expect(spawn).toBeCalledTimes(1);
    expect(cache.cachedHasNPM).not.toBeUndefined();
  });

  it('handles an npm version check failing', () => {
    spawn.mockImplementation(() => {
      throw new Error('npm not found (or something)');
    });

    expect(hasNpm()).toEqual(false);
  });

  it('uses cross-spawn to check for a version of npm', () => {
    hasNpm();
    expect(spawn).toHaveBeenCalledWith('npm', ['--version']);
  });
});
