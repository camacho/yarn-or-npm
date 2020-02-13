jest.mock('cross-spawn', () => {
  const crossSpawn = jest.fn(async () => {});
  crossSpawn.sync = jest.fn();
  return crossSpawn;
});

jest.mock('./decider.js');

const crossSpawn = require('cross-spawn');

const { yarnOrNpm } = require('./decider');

const { spawnSync, spawn } = require('./spawn');

describe('spawning processes with determined client', () => {
  afterEach(() => {
    yarnOrNpm.mockReset();
    crossSpawn.mockReset();
    crossSpawn.sync.mockReset();
  });

  it('uses the decided client to spawn an async process', () => {
    yarnOrNpm.mockReturnValue('client');
    expect(spawn('argument 1', 'argument 2')).resolves;
    expect(crossSpawn).toHaveBeenCalledWith(
      'client',
      'argument 1',
      'argument 2'
    );
  });

  it('uses the decided client to spawn a sync process', () => {
    yarnOrNpm.mockReturnValue('client');
    spawnSync('argument 1', 'argument 2');
    expect(crossSpawn.sync).toHaveBeenCalledWith(
      'client',
      'argument 1',
      'argument 2'
    );
  });
});
