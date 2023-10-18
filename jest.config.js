/** @type {import('jest').Config} */
const config = {
  verbose: true,
};

module.exports = {
  config,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
