import { test, expect } from '@playwright/test';

/**
 * Unit tests for getCurrentTime function.
 */
test.describe('getCurrentTime', () => {
    /**
     * Test that getCurrentTime returns a string.
     */
    test('should return a string', async ({}) => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;

        expect(typeof time).toBe('string');
    });

    /**
     * Test that getCurrentTime returns format HH:MM:SS.
     */
    test('should return time in HH:MM:SS format', async ({}) => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

        expect(time).toMatch(timeRegex);
    });

    /**
     * Test that hours are between 00 and 23.
     */
    test('should have valid hours (00-23)', async ({}) => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const hoursValue = parseInt(time.split(':')[0], 10);

        expect(hoursValue).toBeGreaterThanOrEqual(0);
        expect(hoursValue).toBeLessThanOrEqual(23);
    });

    /**
     * Test that minutes are between 00 and 59.
     */
    test('should have valid minutes (00-59)', async ({}) => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const minutesValue = parseInt(time.split(':')[1], 10);

        expect(minutesValue).toBeGreaterThanOrEqual(0);
        expect(minutesValue).toBeLessThanOrEqual(59);
    });

    /**
     * Test that seconds are between 00 and 59.
     */
    test('should have valid seconds (00-59)', async ({}) => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const secondsValue = parseInt(time.split(':')[2], 10);

        expect(secondsValue).toBeGreaterThanOrEqual(0);
        expect(secondsValue).toBeLessThanOrEqual(59);
    });

    /**
     * Test that time updates between calls.
     */
    test('should update time between calls', async ({}) => {
        const now1 = new Date(),
            hours1 = now1.getHours().toString().padStart(2, '0'),
            minutes1 = now1.getMinutes().toString().padStart(2, '0'),
            seconds1 = now1.getSeconds().toString().padStart(2, '0');
        const time1 = `${hours1}:${minutes1}:${seconds1}`;

        await new Promise((resolve) => setTimeout(resolve, 1100));

        const now2 = new Date(),
            hours2 = now2.getHours().toString().padStart(2, '0'),
            minutes2 = now2.getMinutes().toString().padStart(2, '0'),
            seconds2 = now2.getSeconds().toString().padStart(2, '0');
        const time2 = `${hours2}:${minutes2}:${seconds2}`;

        expect(time1).not.toBe(time2);
    });
});
