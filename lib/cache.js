const cache = {
  cachedHasYarn: undefined,
  cachedHasNPM: undefined,
  cachedClient: undefined,
};

function clearCache() {
  // No need to be explicit here
  for (key in cache) {
    cache[key] = undefined;
  }
}

module.exports = new Proxy(cache, {
  get: (target, prop) => {
    // special case
    if (prop === 'clearCache') {
      return clearCache;
    }

    return target[prop];
  },

  set: (target, prop, value) => {
    if (prop in target) {
      target[prop] = value;
      return;
    }

    throw new Error(`'${prop}' property does not exist in the cache.`);
  },
});
