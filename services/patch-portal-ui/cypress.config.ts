import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  projectId: '9ep3gw',
  defaultCommandTimeout: 10_000,
});
