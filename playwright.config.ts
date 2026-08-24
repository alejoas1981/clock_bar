import { defineConfig } from '@playwright/test';

/**
 * Playwright configuration for all tests.
 */
export default defineConfig({
    /**
     * Test directory containing all tests.
     */
    testDir: './tests',

    /**
     * Run tests in files in parallel.
     */
    fullyParallel: true,

    /**
     * Fail the build on CI if you accidentally left test.only in the source code.
     */
    forbidOnly: !!process.env.CI,

    /**
     * Retry on CI only.
     */
    retries: process.env.CI ? 2 : 0,

    /**
     * Opt out of parallel tests on CI.
     */
    workers: process.env.CI ? 1 : undefined,

    /**
     * Reporter to use.
     */
    reporter: 'html',

    /**
     * Shared settings for all the projects below.
     */
    use: {
        /**
         * Base URL to use in actions like `await page.goto('/')`.
         */
        baseURL: 'http://localhost:3000',

        /**
         * Collect trace when retrying the failed test.
         */
        trace: 'on-first-retry',
    },

    /**
     * Configure projects for major browsers.
     */
    projects: [
        {
            /**
             * Project for testing extension functionality.
             */
            name: 'chromium',
            use: { ...{} },
        },
    ],

    /**
     * Directory for test artifacts.
     */
    outputDir: 'test-results/',
});
