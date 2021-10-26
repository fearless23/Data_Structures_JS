// * Defaults
const defaults = {
  LOG_LEVEL: 'debug',
  LOG_PRETTY: 'true',
};

// * project specific
const custom = {};

process.env = { ...process.env, ...defaults, ...custom };
