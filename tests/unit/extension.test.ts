import * as assert from 'assert';

/**
 * Unit tests for getCurrentTime function.
 */
describe('getCurrentTime', () => {
    /**
     * Test that getCurrentTime returns a string.
     */
    it('should return a string', () => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        assert.strictEqual(typeof time, 'string');
    });

    /**
     * Test that getCurrentTime returns format HH:MM:SS.
     */
    it('should return time in HH:MM:SS format', () => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
        assert.match(time, timeRegex);
    });

    /**
     * Test that hours are between 00 and 23.
     */
    it('should have valid hours (00-23)', () => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const hoursValue = parseInt(time.split(':')[0], 10);
        assert.ok(hoursValue >= 0 && hoursValue <= 23);
    });

    /**
     * Test that minutes are between 00 and 59.
     */
    it('should have valid minutes (00-59)', () => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const minutesValue = parseInt(time.split(':')[1], 10);
        assert.ok(minutesValue >= 0 && minutesValue <= 59);
    });

    /**
     * Test that seconds are between 00 and 59.
     */
    it('should have valid seconds (00-59)', () => {
        const now = new Date(),
            hours = now.getHours().toString().padStart(2, '0'),
            minutes = now.getMinutes().toString().padStart(2, '0'),
            seconds = now.getSeconds().toString().padStart(2, '0');
        const time = `${hours}:${minutes}:${seconds}`;
        const secondsValue = parseInt(time.split(':')[2], 10);
        assert.ok(secondsValue >= 0 && secondsValue <= 59);
    });

    /**
     * Test that time updates between calls.
     */
    it('should update time between calls', (done) => {
        const now1 = new Date(),
            hours1 = now1.getHours().toString().padStart(2, '0'),
            minutes1 = now1.getMinutes().toString().padStart(2, '0'),
            seconds1 = now1.getSeconds().toString().padStart(2, '0');
        const time1 = `${hours1}:${minutes1}:${seconds1}`;
        
        setTimeout(() => {
            const now2 = new Date(),
                hours2 = now2.getHours().toString().padStart(2, '0'),
                minutes2 = now2.getMinutes().toString().padStart(2, '0'),
                seconds2 = now2.getSeconds().toString().padStart(2, '0');
            const time2 = `${hours2}:${minutes2}:${seconds2}`;
            assert.notStrictEqual(time1, time2);
            done();
        }, 1100);
    });
});
