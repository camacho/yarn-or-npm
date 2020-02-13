const cache = require('./cache');

describe('cache', () => {
  it('provides a set of cached values', () => {
    expect(Object.keys(cache)).toMatchInlineSnapshot(`
      Array [
        "cachedHasYarn",
        "cachedHasNPM",
        "cachedClient",
      ]
    `);
  });

  it('provides a mechanism to clear the cached values', () => {
    Object.keys(cache).forEach((key, index) => {
      if (typeof cache[key] === 'function') {
        return;
      }

      cache[key] = index;
    });

    expect(cache).toMatchInlineSnapshot(`
Object {
  "cachedClient": 2,
  "cachedHasNPM": 1,
  "cachedHasYarn": 0,
}
`);

    cache.clearCache();

    expect(cache).toMatchInlineSnapshot(`
Object {
  "cachedClient": undefined,
  "cachedHasNPM": undefined,
  "cachedHasYarn": undefined,
}
`);
  });
});
