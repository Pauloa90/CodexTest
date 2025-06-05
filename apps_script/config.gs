// config.gs - API keys and configuration constants

const CONFIG = {
  OPENAI_API_KEY: 'YOUR_OPENAI_KEY',
  PIAPI_KEY: 'YOUR_PIAPI_KEY',
  TOPMEDIAI_KEY: 'YOUR_TOPMEDIAI_KEY'
};

/**
 * Retrieve configuration value by key.
 * @param {string} key
 * @return {*} value
 */
function getConfig(key) {
  return CONFIG[key];
}
