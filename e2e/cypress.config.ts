import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
	setupNodeEvents(on, config) {
		// system env
		config.env.CYPRESS_PASSWORD = process.env.CYPRESS_PASSWORD;
		config.env.CYPRESS_RESOLUTION = process.env.CYPRESS_RESOLUTION;
		return config;
	},
	baseUrl: 'https://the-internet.herokuapp.com',
	supportFile: 'support/e2e.ts',
	specPattern: 'spec/*.spec.ts',
	fixturesFolder: 'data/*.json',
	screenshotsFolder: 'screenshots',
	videosFolder: 'videos',
	downloadsFolder: 'downloads',
	viewportWidth: 1920,
	viewportHeight: 1080,
	video: false,
	defaultCommandTimeout: 4000,
	retries: 0
  },
});